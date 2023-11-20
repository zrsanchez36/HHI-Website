const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('./config/passport'); 
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes'); 

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, // This is important for sessions or when using cookies
}));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET, 
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
