const express = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = express.Router();


productsRouter.get('/:id',
  productsController.getOneProduct,
  (req, res) => res.json({ product: res.locals.product }),
);

productsRouter.get('/',
  productsController.getAllProducts,
  (req, res) => res.json(res.locals.products),
);

productsRouter.post('/',
  productsController.createNewProduct,
  (req, res) => res.json({ product: res.locals.data }),
);

productsRouter.delete('/:id',
  productsController.deleteProduct,
  (req, res) => res.json(res.locals.products),
);


module.exports = productsRouter;


// res.locals.data = newProduct;