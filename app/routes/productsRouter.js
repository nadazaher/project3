const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();

productsRouter.get('/',
  productsController.getAllProducts,
  (req, res) => res.json(res.locals.products),
);

productsRouter.get('/:id',
  productsController.getOneProduct,
  (req, res) => res.json({ product: res.locals.product })
);


module.exports = productsRouter;
