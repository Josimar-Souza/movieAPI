const express = require('express');
const { CreateValidation } = require('../../middlewares/movies');
const Auth = require('../../middlewares/Auth');
const Create = require('./Create');
const GetALl = require('./GetAll');
const GetByID = require('./GetByID');

const router = express.Router({ mergeParams: true });

router.get('/', GetALl);
router.get('/:id', GetByID);
router.post('/', Auth, CreateValidation, Create);

module.exports = (root) => {
  root.use('/movies', router);
};