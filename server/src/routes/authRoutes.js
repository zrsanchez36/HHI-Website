const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const passport = require('passport');

const router = express.Router();
//const mockDBPath = path.join(__dirname, '../data/keys/users/users.json'); // Adjust path as needed
const { readMockDatabase, writeMockDatabase } = require('../data/keys/users/mockDatabase');


// const readMockDatabase = () => {
//     return JSON.parse(fs.readFileSync(mockDBPath, 'utf-8')).users;
// };

// const writeMockDatabase = (data) => {
//   fs.writeFileSync(mockDBPath, JSON.stringify(data, null, 2), 'utf-8');
// };


// Google OAuth Routes
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);


router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    const { email } = req.user;
    const db = readMockDatabase();

    // Check if user already exists in the mock database
    let user = db.users.find(user => user.email === email);
    if (!user) {
        // User not found in the database, so add them
        user = { email, password: null }; // No password for OAuth users
        db.users.push(user);
        writeMockDatabase(db);
    }

    const token = jwt.sign({ email: user.email }, 'your_jwt_secret_key', { expiresIn: '1h' });

    res.redirect('/dashboard');
  }
);

// Registration route
router.post('/register', async (req, res) => {
  try {
      const { email, password } = req.body;
      const db = readMockDatabase();
      
      // Check if user already exists
      if (db.users.find(user => user.email === email)) {
          return res.status(409).json({ message: 'User already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Add user to database
      db.users.push({ email, password: hashedPassword });
      writeMockDatabase(db);

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Error registering user' });
  }
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const users = readMockDatabase();

  const user = users.find(user => user.email === email);
  if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Assuming you have a secret key for JWT
  const token = jwt.sign({ email: user.email }, 'your_jwt_secret_key', { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to dashboard or other page
    res.redirect('/dashboard');
  }
);



// router.get('/api/calendar/events', async (req, res) => {
//     try {
//         const events = await getCalendarEvents();
//         res.json(events);
//     } catch (error) {
//         console.error('Error while fetching calendar events:', error);
//         res.status(500).send('Error fetching calendar events');
//     }
// });



router.get('/logout', (req, res) => {

  // For JWT or token-based authentication, you might just notify the client
  res.json({ message: 'Logged out successfully' });
});


module.exports = router;
