const bcrypt = require('bcryptjs');
const { db } = require('../config/connection');

module.exports = {

  create(userData) {
    const passwordDigest = bcrypt.hashSync(userData.password, 10);
    return db.one(`
        INSERT INTO users (username, password_digest)
        VALUES ($1, $2)
        RETURNING *;
      `, [userData.username, passwordDigest]);
  },

  findByUsername(username) {
    return db.one(`
        SELECT *
        FROM users
        WHERE username=$1;
      `, username);
  },

  login(user) {
    return this.findByUsername(user.username)
      .then((userData) => {
        const isAuthed = bcrypt.compareSync(user.password, userData.password_digest);
        if (!isAuthed) throw new Error('Invalid');
        return userData;
      });
  },
};
