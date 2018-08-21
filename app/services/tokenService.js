const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET || 'supersecuresecret';

module.exports = {
  makeToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        secret,
        (err, token) => err ? reject(err) : resolve(token)
      );
    });
  },

  verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        secret,
        (err, payload) => err ? reject(err) : resolve(payload)
      );
    });
  },
};
