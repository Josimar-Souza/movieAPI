const { ObjectId } = require('mongodb');
const mongoConnection = require('../Connection');

module.exports = async (id) => {
  try {
    const db = await mongoConnection();

    const movie = await db.collection('movies').find({ _id: ObjectId(id) }).toArray();

    return movie;
  } catch (error) {
    console.log(error);
  }
}
