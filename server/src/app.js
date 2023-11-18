const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./config/passport'); 
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes'); 

const app = express();

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET, // Ensure you have SESSION_SECRET in your .env file
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Route middlewares
app.use(authRoutes);
app.use(apiRoutes);

// Other middlewares and routes...

module.exports = app;
