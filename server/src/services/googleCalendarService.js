const { google } = require('googleapis');
const path = require('path');
const { GoogleAuth } = require('google-auth-library');

const SERVICE_ACCOUNT_KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const getCalendarEvents = async () => {
    console.log('Initializing Google Calendar API with service account:', SERVICE_ACCOUNT_KEY_FILE);

    const auth = new GoogleAuth({
        keyFile: SERVICE_ACCOUNT_KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID; // Ensure this is set in your .env file

    try {
        console.log(`Fetching events for calendar ID: ${calendarId}`);
        const res = await calendar.events.list({
            calendarId: calendarId,
            timeMin: (new Date()).toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        });
        console.log('Events fetched successfully:', res.data.items);
        return res.data.items;
    } catch (error) {
        console.error('Error fetching calendar events:', error);
        throw error; // This error will propagate and can result in a 500 response
    }
};

module.exports = getCalendarEvents;
