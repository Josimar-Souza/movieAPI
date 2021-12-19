const { ObjectId } = require('mongodb');
const mongoConnection = require('../Connection');

module.exports = async (newValues, id) => {
  try {
    const db = await mongoConnection();

    const updatedMovie = await db.collection('movies').updateOne(
      { _id: ObjectId(id) },
      {$set: newValues},
    );

    return updatedMovie;
  } catch (error) {
    console.log(error);
  }
}