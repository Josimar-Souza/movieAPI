const moviesModel = require('../../model/movies');

module.exports = async (movie) => {
  try {
    const newMovie = await moviesModel.Create(movie);

    return newMovie;
  } catch (error) {
    console.log(error);
  }
};
