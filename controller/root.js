const express = require('express');
const moviesRouter = require('./movies/MoviesRouter');
const usersRouter = require('./users/UsersRouter');

const root = express.Router({ mergeParams: true });

moviesRouter(root);
usersRouter(root);

module.exports = (app) => {
  app.use(root);
}