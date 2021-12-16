const express = require('express');
const moviesRouter = require('./movies/MoviesRouter');

const root = express.Router({ mergeParams: true });

moviesRouter(root);

module.exports = (app) => {
  app.use(root);
}