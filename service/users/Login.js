require('dotenv').config();
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const usersModel = require('../../model/users');

const getToken = (payload) => {
  const secret = process.env.API_SECRET;

  const options = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payload }, secret, options);
  return token;
}

module.exports = async (login) => {
  try {
    const CRYPTO_SECRET = process.env.CRYPTO_SECRET;
    const user = await usersModel.GetByEmail(login.email);

    if (!user) return { isValid: false, status: StatusCodes.NOT_FOUND, message: 'Usuário não encontrado.' };

    const userPassword = crypto.AES.decrypt(user.password, CRYPTO_SECRET).toString(crypto.enc.Utf8);

    if (login.password !== userPassword) return { isValid: false, status: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Senha incorreta!' };

    const { password, ...payload } = user;

    const token = getToken(payload);

    return { isValid: true, status: StatusCodes.OK, message: token };
  } catch (error) {
    console.log(error);
  }
}