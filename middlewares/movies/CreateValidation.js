const { StatusCodes } = require('http-status-codes');
const moviesValidations = require('../../service/movies/Validations');

module.exports = (req, res, next) => {
  try {
    const isValid = moviesValidations.CreateValidation(req.body);

    if (!isValid) {
      return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Parâmetros incorretos ou faltando.' });
    }

    next();
  } catch (error) {
    next(error);
  }
}