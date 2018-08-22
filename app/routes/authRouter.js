const authRouter = require('express').Router();
const authController = require('../controllers/authController');

authRouter.post('/register', authController.register, authController.createToken, authController.SendUserInfo);

authRouter.post('/login', authController.login, authController.createToken, authController.SendUserInfo);

module.exports = authRouter;
