const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const azureConfig = require('./azureConfig');

passport.use(new OIDCStrategy({
    identityMetadata: `https://login.microsoftonline.com/${azureConfig.tenantID}/v2.0/.well-known/openid-configuration`,
    clientID: azureConfig.clientID,
    responseType: 'code id_token',
    responseMode: 'form_post',
    redirectUrl: azureConfig.redirectUrl,
    allowHttpForRedirectUrl: true,
    clientSecret: azureConfig.clientSecret,
    validateIssuer: false,
    passReqToCallback: true,
    scope: azureConfig.scope
},
(req, iss, sub, profile, accessToken, refreshToken, done) => {
    // Find or create a user in your database and return the user object
    done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user.oid);
});

passport.deserializeUser((oid, done) => {
    // Find the user by oid and return it
    done(null, user);
});
