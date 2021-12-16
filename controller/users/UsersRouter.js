const express = require('express');
const Create = require('./Create');
const Login = require('./Login');
const { CreateValidation } = require('../../middlewares/users');

const router = express.Router({ mergeParams: true });

router.post('/', CreateValidation, Create);
router.post('/login', Login);

module.exports = (root) => {
  root.use('/users', router);
}