const express = require('express');
const companiesController = require('../controllers/companiesController');
const companiesRouter = express.Router();

companiesRouter.get('/', 
    companiesController.getAllCompanies, 
    (req, res) => res.json({companies: res.locals.companies})
);


module.exports = companiesRouter;
