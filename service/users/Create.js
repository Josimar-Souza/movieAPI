require('dotenv').config();
const crypto = require('crypto-js');
const usersModel = require('../../model/users');

module.exports = async (user) => {
  try {
    const CRYPTO_SECRET = process.env.CRYPTO_SECRET;
    const passwordHash = crypto.AES.encrypt(user.password, CRYPTO_SECRET).toString();

    user.password = passwordHash;

    const newUser = await usersModel.Create(user);

    return newUser;
  } catch (error) {
    console.log(error);
  }
}