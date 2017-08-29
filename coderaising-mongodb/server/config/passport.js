// const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../resources/user/userModel');
const configAuth = require('./auth');

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // code for login (use('local-login', new LocalStategy))
  // code for signup (use('local-signup', new LocalStategy))

  // =========================================================================
  // GOOGLE ==================================================================
  // =========================================================================
  passport.use(new GoogleStrategy({
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL,
    },
    (token, refreshToken, profile, done) => {
      // try to find the user based on their google id
      User.findOne({'google.id': profile.id}, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          // if a user is found, log them in
          return done(null, user);
        } else {
          // if the user isnt in our database, create a new user
          const newUser = new User();
          // set all of the relevant information
          const originalImg = profile.photos[0].value;
          const biggerImg = originalImg.split("?sz=50")[0]+"?sz=150";
          newUser.google.id = profile.id;
          newUser.google.token = token;
          newUser.google.name = profile.displayName;
          newUser.google.email = profile.emails[0].value; // pull the first emai
          newUser.google.imageUrl = biggerImg;

          // save the user
          newUser.save((err) => {
            if (err) {
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    }));
};
