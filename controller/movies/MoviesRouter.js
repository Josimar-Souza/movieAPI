const express = require('express');
const Create = require('./Create');
const { CreateValidation } = require('../../middlewares/movies');

const router = express.Router({ mergeParams: true });

router.post('/', CreateValidation, Create);

module.exports = (root) => {
  root.use('/movies', router);
};