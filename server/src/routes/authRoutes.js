const express = require('express');
const passport = require('passport');
const router = express.Router();

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

router.get('/api/calendar/events', async (req, res) => {
    try {
        const events = await getCalendarEvents();
        res.json(events);
    } catch (error) {
        res.status(500).send('Error fetching calendar events');
    }
});

module.exports = router;
