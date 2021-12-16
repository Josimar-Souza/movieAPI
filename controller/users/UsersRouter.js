const express = require('express');
const Create = require('./Create');
const Login = require('./Login');

const router = express.Router({ mergeParams: true });

router.post('/', Create);
router.post('/login', Login);

module.exports = (root) => {
  root.use('/users', router);
}