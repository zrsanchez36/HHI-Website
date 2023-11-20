const express = require('express');
const router = express.Router();
const getCalendarEvents = require('../services/googleCalendarService');

router.get('/api/calendar/events', async (req, res) => {
    try {
        const events = await getCalendarEvents();
        res.json(events);
    } catch (error) {
        console.error('API Error:', error); // Log the error for debugging
        res.status(500).send('Error fetching calendar events');
    }
});

module.exports = router;
