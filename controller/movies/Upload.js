const { StatusCodes } = require('http-status-codes');
const moviesService = require('../../service/movies');

module.exports = async (req, res, next) => {
  try {
    const { file } = req;
    const { id } = req.params;
    const { _id } = req.user;

    const imageURL = `http://localhost:3000/movies/images/${file.filename}`

    const updatedMovie = await moviesService.Update({ image: imageURL }, id, _id);

    return res.status(StatusCodes.OK).send(updatedMovie.message);
  } catch (error) {
    next(error);
  }
}