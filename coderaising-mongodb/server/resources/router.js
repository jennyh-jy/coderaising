const router = require('express').Router();
const postController = require('./post/postController');
const userController = require('./user/userController');

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

router.get('/loginStatus', (req, res) => {
  res.json({
    isLoggedIn: req.isAuthenticated(),
  });
});

router.get('/getUser', userController.retrieveOne);
router.get('/allUsers', userController.retrieve);
router.get('/profile', userController.retrieveOne);

module.exports = router;
