let express = require('express');
let router = express.Router();

const indexController = require('../controllers/index');
const userController = require('../controllers/user');

//router.get('/login', indexController.show_login);
router.post('/login',indexController.login);
//router.get('/signup',indexController.show_signup);
router.post('/signup',indexController.signup);
router.post('/addUser',userController.create_user)
router.get('/users',userController.show_users);
router.get('/user/:id',userController.show_user);
//router.get('/user/:id/edit',userContorller.show_edit_user);
router.post('/user/:id/edit',userController.edit_user);

module.exports = router;
