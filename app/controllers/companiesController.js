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

    getOneCompany(req, res, next) {
        db.findOneCompany(req.params.id)
            .then((company) => {
                res.locals.company = company;
                next();
            })
            .catch(next);
    }
}
