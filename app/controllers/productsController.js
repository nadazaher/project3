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
    db.addNewProduct(req.body)
      .then((product) => {
        res.locals.data = product;
        next();
      })
      .catch(e => next(e));
  },

  deleteProduct(req, res, next) {
    db.delete(req.params.id)
      .then(() => {
        next();
      })
      .catch((e) => {
        res.sendStatus(400);
      })
  },

  updateProduct(req, res, next) {
    const { id } = req.params.id;
    const {
      company_id, name, product_type, msrp, logo,
    } = req.body;
    const modifiedProduct = {
      id: re.body.id,
      company_id,
      name,
      product_type,
      msrp,
      logo,
    };
    db.update(modifiedProduct)
      .then((product) => {
        res.locals.data = product;
        next();
      })
      .catch(e => next(e));
  },
};
