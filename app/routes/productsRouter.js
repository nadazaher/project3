const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/',
  productsController.getAllProducts,
  (req, res) => res.json(res.locals.products),
);

module.exports = productsRouter;
