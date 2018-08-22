const tokenService = require('../services/tokenService.js');
const userModel = require('../models/users.js');

// - `register` - route handler that will create a new user using
// the User model and then creates a JWT for that user and sends
// it in response.

// GOOD TIME TO USE ASYNC AWAIT FUNCTIONS?

module.exports = {

  register(req, res, next) {
    userModel.create(req.body)
      .then((user) => {
        delete user.password_digest;
        res.locals.user = user;
        next();
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
  
  login(req, res, next) {
    userModel.login(req.body)
      .then((user) => {
        delete user.password_digest;
        res.locals.user = user;
        next();
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  createToken(req, res, next) {
    tokenService.makeToken(res.locals.user)
      .then((token) => {
        res.locals.token = token;
        next();
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  SendUserInfo(req, res) {
    res.json({ ...res.locals.user, token: res.locals.token })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

};
