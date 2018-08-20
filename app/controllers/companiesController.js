const db = require('../models/companies');

module.exports = {
    getAllCompanies(req, res, next) {
        console.log("contollers");
        db.findAllCompanies()
            .then((companies) => {
                res.locals.companies = companies;
                next();
            })
            .catch(next);
    },
}
