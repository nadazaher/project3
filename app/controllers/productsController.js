const db = require('../models/products');

module.exports = {
  getAllProducts(req, res, next) {
    db.findAllProducts()
      .then((products) => {
        res.locals.products = products;
        next();
      })
      .catch(next);
  },

  getOneProduct(req, res, next) {
    db.findOneProduct(req.params.id)
      .then((product) => {
        res.locals.product = product;
        next();
      })
      .catch(next);
  },

  


}