const { StatusCodes } = require('http-status-codes');
const moviesModel = require('../../model/movies');

module.exports = async (id, userID) => {
  try {
    const movie = await moviesModel.GetByID(id);

    if (!movie) {
      return { status: false, statuscode: StatusCodes.NOT_FOUND, message: 'Filme não encontrado' };
    }

    if (userID !== movie.userId) {
      return { status: false, statuscode: StatusCodes.UNAUTHORIZED, message: 'Você só pode apagar um filme que você adicionou!' };
    }

    await moviesModel.Remove(id);

    return { status: true, statuscode: StatusCodes.NO_CONTENT };
  } catch (error) {
    console.log(error);
  }
}