// const { db } = require('../config/connection');

// module.exports = {


// createFavorite(favorite) {
//     return db.one(`
//     INSERT INTO favorites
//     (user_id, product_id)
//     VALUES
//     ($/user_id/, $/product_id/)
//     RETURNING *
//     `, favorite);
//   },

// deleteFavorite(id) {
//     return db.none(`
//     DELETE FROM favorites
//     where id = $1`, id)

// },

// findFavoritesByUserName() {
//     return db.many(`
//         SELECT
//         u. id AS id, 
//         f. user_id,
//         f. product_id,
//         u. username
//         FROM favorites f 
//         JOIN users u ON (u.id = f.user_id)
//     `);
// }
// };

