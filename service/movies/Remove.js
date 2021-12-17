const moviesModel = require('../../model/movies');

module.exports = async (id, userID) => {
  try {
    const movie = await moviesModel.GetByID(id);

    if (userID !== movie.userId) {
      return { status: false, message: 'Você só pode apagar um filme que você adicionou!' };
    }

    await moviesModel.Remove(id);

    return { status: true };
  } catch (error) {
    console.log(error);
  }
}