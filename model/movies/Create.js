const mongoConnection = require('../Connection');
const { ObjectId } = require('mongodb');

module.exports = async (movie) => {
  try {
    const db = await mongoConnection();

    const { insertedId: { id } } = await db.collection('movies').insertOne(movie);

    const newMovie = {
      ...movie,
      _id: ObjectId(id).toString(),
    }

    return newMovie;
  } catch (error) {
    console.log(error);
  }
};
