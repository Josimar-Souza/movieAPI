const path = require('path');
const express = require('express');
const { StatusCodes } = require('http-status-codes');
const Error = require('../middlewares/Error');
const rootController = require('../controller/root');

const app = express();

app.use(express.json());
app.use('/movies/images', express.static(path.resolve(__dirname, '../uploads')));

app.get('/ping', (_req, res) => res.status(StatusCodes.OK).send({ message: 'pong' }));

rootController(app);

app.use(Error);

module.exports = app;