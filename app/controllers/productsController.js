const db = require('../models/products');

module.exports = {
    getAllProducts(req, res, next) {
        db.findAllProducts()
            .then(products => {
                res.locals.products = products;
                next();
            })
            .catch(next);
    },
}