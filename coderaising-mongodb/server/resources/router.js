const router = require('express').Router();
const postController = require('./post/postController');
const userController = require('./user/userController');
const charityController = require('./charities/charityController');

// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }
  res.sendStatus(400);
}

router.get('/loginStatus', (req, res) => {
  res.json({
    isLoggedIn: req.isAuthenticated(),
  });
});

router.get('/posts', postController.retrieve);
router.get('/posts/:number', postController.retrieveOne);
router.post('/newpost', postController.createOne);

router.get('/allUsers', userController.retrieve);
router.get('/profile', userController.loggedInUserRetrieve);
router.get('/getUser', userController.loggedInUserRetrieve);
router.put('/updateUserBalance', userController.loggedInUserBalanceUpdate);
router.put('/updatePostOwnerBalance', userController.postOwnerBalanceUpdate);
router.put('/deposit', userController.userAccountDeposit);

router.get('/charities', charityController.retrieve);
router.put('/updateCharityBalance', charityController.charityBalanceUpdate);


module.exports = router;
