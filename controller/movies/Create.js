const { StatusCodes } = require('http-status-codes');
const moviesService = require('../../service/movies');

module.exports = async (req, res, next) => {
  try {
    const movie = {
      ...req.body,
      userId: req.user._id,
    };

    const newMovie = await moviesService.Create(movie);

    return res.status(StatusCodes.CREATED).send(newMovie);
  } catch (error) {
    next(error);
  }
};
