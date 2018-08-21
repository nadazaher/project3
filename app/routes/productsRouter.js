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

productsRouter.put('/:id',
  productsController.updateProduct,
  (req, res) => res.json({ product: res.locals.data }),
);

module.exports = productsRouter;
