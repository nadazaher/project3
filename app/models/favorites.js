const { db } = require('../config/connection');

module.exports = {

  findAllFavorites() {
    return db.many(`
      SELECT 
      f.user_id AS user_id,
      f.id AS favorite_id,
      p.id AS id,
      p.company_id AS company_id,
      p.company AS company,
      p.name AS name,
      p.product_type AS product_type,
      p.msrp AS msrp,
      p.logo AS logo
      FROM favorites f
      JOIN products p ON f.product_id = p.id
      ORDER BY f.user_id, f.product_id;
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
