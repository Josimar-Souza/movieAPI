const express = require('express');
const { CreateValidation } = require('../../middlewares/movies');
const Create = require('./Create');
const GetALl = require('./GetAll');

const router = express.Router({ mergeParams: true });

router.get('/', GetALl);
router.post('/', CreateValidation, Create);

module.exports = (root) => {
  root.use('/movies', router);
};