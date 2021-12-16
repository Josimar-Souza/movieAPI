const { StatusCodes } = require('http-status-codes');
const moviesService = require('../../service/movies');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await moviesService.GetByID(id);

    res.status(StatusCodes.OK).send(movie);
  } catch (error) {
    next(error);
  }
}