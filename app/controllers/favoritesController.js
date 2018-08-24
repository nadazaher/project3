const db = require('../models/favorites');

module.exports = {
  getAllFavorites(req, res, next) {
    db.findAllFavorites()
      .then((favorites) => {
        res.locals.favorites = favorites;
        next();
      })
      .catch(next);
  },

  createNewFavorite(req, res, next) {
    db.createFavorite(req.body)
      .then((favorite) => {
        res.locals.data = favorite;
        next();
      })
      .catch(e => next(e));
  },

  deleteFavorite(req, res, next) {
    db.delete(req.params.id)
      .then(() => {
        next();
      })
      .catch((e) => {
        res.sendStatus(400);
      });
  },

  countFavorite(req, res, next) {
    db.countCompanies(req.params.id)
      .then((favorites) => {
        res.locals.favorites = favorites;
        next();
      })
      .catch((e) => {
        res.sendStatus(400);
      });
  },

};
