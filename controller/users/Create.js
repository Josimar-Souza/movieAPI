const { StatusCodes } = require('http-status-codes');
const usersService = require('../../service/users');

module.exports = async (req, res, next) => {
  try {
    const newUser = await usersService.Create(req.body);

    res.status(StatusCodes.CREATED).send(newUser);
  } catch (error) {
    next(error);
  }
}