const express = require('express');
const { CreateValidation, Upload } = require('../../middlewares/movies');
const Auth = require('../../middlewares/Auth');
const Create = require('./Create');
const GetALl = require('./GetAll');
const GetByID = require('./GetByID');
const Update = require('./Update');
const Remove = require('./Remove');
const UploadController = require('./Upload');

const router = express.Router({ mergeParams: true });

router.get('/', GetALl);
router.get('/:id', GetByID);
router.post('/', Auth, CreateValidation, Create);

router.post(
  '/images/uploads/:id',
  Auth, Upload.single('file'),
  UploadController,
);

router.put('/:id', Auth, Update);
router.delete('/:id', Auth, Remove);

module.exports = (root) => {
  root.use('/movies', router);
};