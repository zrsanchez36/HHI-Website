const express = require('express');
const axios = require('axios');
const getAccessToken = require('../auth/auth');

const router = express.Router();

router.get('/events', async (req, res) => {
    try {
        const accessToken = await getAccessToken();
        const calendarId = "AAMkADY2NDExY2UyLWI0NDgtNGY2Ni04OTY2LTBlYjhiYzMzMzZiOQBGAAAAAAA34qY7GDEBRa-jFo7-tVYqBwCV9mcvxB5nTZeBBx7xNv_hAAAAAAEGAACV9mcvxB5nTZeBBx7xNv_hAATlm3VKAAA=";  // Replace with your shared calendar ID
        const response = await axios.get(`https://graph.microsoft.com/v1.0/calendars/${calendarId}/events`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Failed to fetch events:', error);
        res.status(500).send('Error fetching calendar events');
    }
});

module.exports = router;