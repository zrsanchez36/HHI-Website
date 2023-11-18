const express = require('express');
const router = express.Router();
const getCalendarEvents = require('./googleCalendar');

router.get('/api/calendar', async (req, res) => {
    if (!req.isAuthenticated() || !req.user.accessToken) {
        return res.status(401).send('Unauthorized');
    }

    try {
        const events = await getCalendarEvents(req.user.accessToken);
        res.json(events);
    } catch (error) {
        res.status(500).send('Error fetching calendar events');
    }
});

module.exports = router;
