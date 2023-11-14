const axios = require('axios');
const qs = require('querystring');

const getAccessToken = async () => {
    const url = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;
    const params = {
        client_id: process.env.CLIENT_ID,
        scope: 'https://graph.microsoft.com/.default',
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'client_credentials'
    };

    try {
        const res = await axios.post(url, qs.stringify(params), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        console.log("Access Token:", res.data.access_token);
        return res.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        throw new Error('Failed to obtain access token');
    }
};

module.exports = getAccessToken;
