// execute pgp with db config, so a connection is made
const {db} = require('../config/connection');

module.exports = {

    findAllCompanies() {
        console.log("models");
        return db.many(`
        SELECT * 
        FROM companies
        `);
    }

};
