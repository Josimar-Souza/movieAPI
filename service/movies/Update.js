const { StatusCodes } = require('http-status-codes');
const moviesModel = require('../../model/movies');

module.exports = async (newValues, id, userId) => {
  try {
    const movie = await moviesModel.GetByID(id);

    if (!movie) {
      return { status: false, statusCodes: StatusCodes.NOT_FOUND, message: 'filme não encontrado!' }
    }

    if (movie.userId !== userId) {
      return { status: false, statusCodes: StatusCodes.UNAUTHORIZED, message: 'Você só pode atualizar um filme que você adicionou' };
    }

    const updatedMovie  = await moviesModel.Update(newValues, id);

    return { status: true, statusCodes: StatusCodes.OK, message: updatedMovie };
  } catch (error) {
    console.log(error);
  }
}