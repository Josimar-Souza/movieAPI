const moviesModel = require('../../model/movies');

module.exports = async (id) => {
  try {
    const movie = await moviesModel.GetByID(id);

    return movie;
  } catch (error) {
    console.log(error);
  }
}