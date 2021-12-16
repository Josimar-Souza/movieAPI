const { StatusCodes } = require('http-status-codes');
const moviesService = require('../../service/movies');

module.exports = async (req, res, next) => {
  try {
    const movies = await moviesService.GetAll();

    res.status(StatusCodes.OK).send(movies);
  } catch (error) {
    next(error);
  }
}