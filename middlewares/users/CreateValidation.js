const { StatusCodes } = require('http-status-codes');
const { CreateValidation } = require('../../service/users/Validations');

module.exports = async (req, res, next) => {
  try {
    const isValid = await CreateValidation(req.body);

    if (!isValid.status) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({ message: isValid.message});
    }

    next();
  } catch (error) {
    next(error);
  }
}