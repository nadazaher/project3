const bcrypt = require('bcryptjs');
const { db } = require('../config/connection');

module.exports = {

    function register(username, password) {
    return bcrypt.hash(password, 8)
        .then((hash) => {
            return db.one(`
          INSERT INTO users (username, password_digest)
          VALUES ($/username/, $/password_digest/)
          RETURNING *
        `, { username, password_digest: hash, });
        });
},

function findByUsername(username) {
    return db.one(`
      SELECT * FROM users
      WHERE username = $1
    `, username);
},

function login(username, password) {
    return findByUsername(username)
        .then((user) => {
            return bcrypt.compare(password, user.password_digest)
                .then((res) => {
                    if (!res) throw new Error('bad password');
                    delete user.password_digest;
                    return user;
                });
        })
        .catch(() => {
            throw new Error('Unauthorized');
        });
}
}