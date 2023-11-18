const router = require('express').Router();
const passport = require('passport');

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'] })
);

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to the dashboard or other page
    res.redirect('/dashboard');
  }
);

// Add other routes as needed

module.exports = router;
