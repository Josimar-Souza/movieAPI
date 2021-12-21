const { ObjectId } = require('mongodb');
const mongoConnection = require('../Connection');

module.exports = async (newValues, id) => {
  try {
    const db = await mongoConnection();

    await db.collection('movies').updateOne(
      { _id: ObjectId(id) },
      {$set: newValues},
    );

    const movie = await db.collection('movies').find({ _id: ObjectId(id) }).toArray();

    const updatedMovie = {
      ...movie[0],
      ...newValues,
    };

    return updatedMovie;
  } catch (error) {
    console.log(error);
  }
}