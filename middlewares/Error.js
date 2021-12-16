const { StatusCodes } = require('http-status-codes');

module.exports = (err, req, res, next) => {
  console.log(err);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error' });
}