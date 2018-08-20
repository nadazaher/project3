// execute pgp with db config, so a connection is made
const { db } = require('../config/connection');

module.exports = {

    findAllProducts() {
        return db.many(`
        SELECT * 
        FROM products
        `);
    },

};
