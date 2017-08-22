const mainRouter = require('express').Router();
const postController = require('./post/postController');
// const userController = require('./userController');


// userController.route('/signup')
// .post(userController.createOne);
//
// userController.route('/login')
// .post(userController.retrieveOne);
//
// userController.route('/profile/:number')
// .get(userController.retrieveOne);

mainRouter.route('/posts')
.get(postController.retrieve);

mainRouter.route('/posts/:number')
.get(postController.retrieveOne);

mainRouter.route('/newpost')
.post(postController.createOne);


module.exports = mainRouter;
