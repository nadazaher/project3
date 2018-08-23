const express = require('express');
const favoritesController = require('../controllers/favoritesController');

const favoritesRouter = express.Router();

favoritesRouter.delete('/:id',
  favoritesController.deleteFavorite,
  (req, res) => res.json(res.locals.favorites),
);

favoritesRouter.get('/',
  favoritesController.getAllFavorites,
  (req, res) => res.json(res.locals.favorites),
);

favoritesRouter.post('/',
  favoritesController.createNewFavorite,
  (req, res) => res.json({ favorite: res.locals.data }),
);

module.exports = favoritesRouter;
