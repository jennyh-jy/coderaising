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

router.get('/allUsers', userController.retrieve);
router.get('/profile', userController.loggedInUserRetrieve);
router.get('/getUser', userController.loggedInUserRetrieve);
// router.get('/getPostOwner', userController.postOwnerRetrieve);

router.put('/updateUserBalance', userController.loggedInUserBalanceUpdate);
router.put('/updatePostOwnerBalance', userController.postOwnerBalanceUpdate);

module.exports = router;
