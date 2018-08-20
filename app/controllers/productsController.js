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

  createNewProduct(req, res, next) {
    console.log(req.body);
    db.addNewProduct(req.body)
      .then((product) => {
        res.locals.data = product;
        next();
      })
      .catch(e => next(e));
  },

  deleteProduct(req, res, next) {
    console.log('nada delete');
      db.delete(req.params.id)
          .then(() => {
            next();
          })
          .catch((e) => {
            res.sendStatus(400);
          })
        },

};
