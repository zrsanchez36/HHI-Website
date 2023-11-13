// const passport = require('passport');
// const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
// const axios = require('axios');

// passport.use(new OIDCStrategy({
//     clientID: process.env.AZURE_CLIENT_ID,
//     clientSecret: process.env.AZURE_CLIENT_SECRET,
//     identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/v2.0/.well-known/openid-configuration`,
//     responseType: 'code',
//     responseMode: 'query',
//     redirectUrl: process.env.REDIRECT_URI,
//     allowHttpForRedirectUrl: true,
//     scope: ['Calendars.Read']
// }, async (iss, sub, profile, accessToken, refreshToken, done) => {
//     try {
//         // Here, add logic to verify user and store accessToken
//         // For example, find or create a user in your database
//         // Then, return the user object or any relevant info
//         return done(null, { profile, accessToken });
//     } catch (error) {
//         return done(error, null);
//     }
// }));

