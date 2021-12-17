const mongoConnection = require('../Connection');

module.exports = async (email) =>  {
  try {
    const db = await mongoConnection();

    const user = await db.collection('users').find({ email }).toArray();

    return user[0];
  } catch (error) {
    console.log(error);
  }
}