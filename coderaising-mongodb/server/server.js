const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');

const db = require('./db');
const router = require('./resources/router.js');

require('./config/passport')(passport);

// Create the Express application:
const app = express();

// Attach middleware:
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react-client/dist'))); //To load index page

app.use(session({
  secret: 'asdfsdafadsfdsafasdfadsfad',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000 // session 유지 시간 (1시간)
  }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Import the mainRouter and assign it to the correct route (index/*** 화면 들어갈 때 JSON 데이터 나오지 않게 하려고)
app.use('/api', router);

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// the callback after google has authenticated the user
app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

// route for logging out
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

//(Similar to) server rendering
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

module.exports = app;
