const { StatusCodes } = require('http-status-codes');
const moviesService = require('../../service/movies');

module.exports = async (req, res, next) => {
  try {
    const newMovie = await moviesService.Create(req.body);

    return res.status(StatusCodes.CREATED).send(newMovie);
  } catch (error) {
    next(error);
  }
};
