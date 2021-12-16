const moviesModel = require('../../model/movies');

module.exports = async () => {
  try {
    const movies = await moviesModel.GetAll();

    return movies;
  } catch (error) {
    console.log(error);
  }
}