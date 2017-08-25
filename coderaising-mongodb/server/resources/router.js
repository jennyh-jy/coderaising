const router = require('express').Router();
const passport = require('passport');
const postController = require('./post/postController');
// const userController = require('./user/userController');

// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }
  res.sendStatus(400);
}

router.get('/posts', postController.retrieve);
router.get('/posts/:number', postController.retrieveOne);
router.post('/newpost', postController.createOne);



// route for login form
// route for processing the login form
// route for signup form
// route for processing the signup form
//
//
// router.post('/signup', userController.createOne);
// router.post('/login', userController.retrieveOne);
//
//
// router.get('/profile/:number', userController.retrieveOne);
//
// // route for showing the profile page
// router.get('/profile', isLoggedIn, (req, res) => {
//   retrieveOne
//   res.render('profile.ejs', {user: req.user}); // get the user out of session and pass to template
// });
//
// // route for logging out
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });
//
// send to google to do the authentication
// profile gets us their basic information including their name
// email gets their emails






module.exports = router;
