// execute pgp with db config, so a connection is made
const { db } = require('../config/connection');

module.exports = {

    findAllCompanies() {
        console.log("models");
        return db.many(`
        SELECT * 
        FROM companies
        `);
    },
    findOneCompany(id) {
        return db.one(`
        SELECT * 
        FROM companies
        WHERE  id=$1`, id
        );
    }

};
