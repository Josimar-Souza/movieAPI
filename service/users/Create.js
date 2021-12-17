const usersModel = require('../../model/users');

module.exports = async (user) => {
  try {
    const newUser = await usersModel.Create(user);

    return newUser;
  } catch (error) {
    console.log(error);
  }
}