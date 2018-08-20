const express = require('express');
const companiesController = require('../controllers/companiesController');
const companiesRouter = express.Router();

companiesRouter.get('/', 
    companiesController.getAllCompanies, 
    (req, res) => res.json({companies: res.locals.companies})
);

companiesRouter.get('/:id', 
    companiesController.getOneCompany, 
    (req, res) => res.json({company: res.locals.company})
);




module.exports = companiesRouter;
