const tokenService = require('../services/tokenService.js');
const userModel = require('../models/users.js');

// - `register` - route handler that will create a new user using
// the User model and then creates a JWT for that user and sends
// it in response.

// GOOD TIME TO USE ASYNC AWAIT FUNCTIONS?

module.exports = {

  register(req, res) {
    userModel.create(req.body)
      .then((user) => {
        delete user.password_digest;
        return tokenService.makeToken(user);
      })
      .then((token) => {
        res.json({
          token,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },

  login(req, res) {
    userModel.login(req.body)
      .then((user) => {
        delete user.password_digest;
        return tokenService.makeToken(user);
      })
      .then((token) => {
        res.json({
          token,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  },
};
