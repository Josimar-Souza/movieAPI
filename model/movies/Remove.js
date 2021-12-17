const { ObjectId } = require('mongodb');
const mongoConnection = require('../Connection');

module.exports = async (id) => {
  try {
    const db = await mongoConnection();

    await db.collection('movies').deleteOne({ _id: ObjectId(id) });

    return;
  } catch (error) {
    console.log(error);
  }
}