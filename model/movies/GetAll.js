const mongoConnection = require('../Connection');

module.exports = async () => {
  try {
    const db = await mongoConnection();

    const movies = await db.collection('movies').find().toArray();

    return movies;
  } catch (error) {
    console.log(error);
  }
}