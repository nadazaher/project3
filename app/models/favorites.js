const { db } = require('../config/connection');

module.exports = {

  findAllFavorites() {
    return db.many(`
      SELECT * FROM favorites;
    `);
  },

  createFavorite(favorite) {
    return db.one(`
    INSERT INTO favorites
    (user_id, product_id)
    VALUES
    ($/user_id/, $/product_id/)
    RETURNING *
    `, favorite);
  },

  delete(id) {
    return db.none(`
    DELETE FROM favorites
    where id = $1`, id);
  },

};
