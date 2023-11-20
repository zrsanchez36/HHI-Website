const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { readMockDatabase, writeMockDatabase } = require('../data/keys/users/mockDatabase');
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    const users = readMockDatabase();
    const user = users.find(user => user.email === profile.emails[0].value);

    if (!user) {
        const newUser = { email: profile.emails[0].value, googleId: profile.id };
        users.push(newUser);
        writeMockDatabase(users);
        done(null, newUser);
    } else {
        done(null, user);
    }
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

