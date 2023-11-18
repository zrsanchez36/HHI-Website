const { google } = require('googleapis');
const path = require('path');
const { GoogleAuth } = require('google-auth-library');

// const requirement =  require('../data/keys/hhi-gmail-integration-ffc2dd3425d9.json')

const SERVICE_ACCOUNT_KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;
// path.join(__dirname, '../data/keys/hhi-gmail-integration-ffc2dd3425d9.json');

const getCalendarEvents = async () => {
    const auth = new GoogleAuth({
        keyFile: SERVICE_ACCOUNT_KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID; // Accessing calendar ID

    try {
        const res = await calendar.events.list({
            calendarId: calendarId,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        });
        return res.data.items;
    } catch (error) {
        console.error('The API returned an error: ' + error);
        return [];
    }
};

module.exports = getCalendarEvents;
