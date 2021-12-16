const { ObjectId } = require('mongodb');
const mongoConnection = require('../Connection');

module.exports = async (user) => {
  try {
    const db = await mongoConnection();

    const { insertedId: { id } } = await db.collection('users').insertOne(user);

    const { password, ...userWithoutPassword } = user;

    const newUser = {
      ...userWithoutPassword,
      _id: ObjectId(id).toString(),
    }

    return newUser;
  } catch (error) {
    console.log(error);
  }
}