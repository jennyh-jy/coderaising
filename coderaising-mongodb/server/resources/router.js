const mainRouter = require('express').Router();
const postController = require('./postController');
const userController = require('./userController');


// 바꿔야됨
mainRouter.route('/signup')
.post(userController.createOne);




.delete(controller.delete);

mainRouter.route('/:number')
.get(controller.retrieveOne)
.put(controller.updateOne)
.delete(controller.deleteOne);

module.exports = mainRouter;
