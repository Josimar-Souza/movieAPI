const express = require('express');
const Create = require('./Create');

const router = express.Router({ mergeParams: true });

router.post('/', Create);

module.exports = (root) => {
  root.use('/movies', router);
};