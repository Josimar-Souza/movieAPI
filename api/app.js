const express = require('express');
const { StatusCodes } = require('http-status-codes');
const rootController = require('../controller/root');

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => res.status(StatusCodes.OK).send({ message: 'pong' }));

rootController(app);

module.exports = app;