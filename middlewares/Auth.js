const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
require('dotenv').config();

const API_SECRET = process.env.API_SECRET;

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let userInfo;

    try {
      userInfo = jwt.verify(authorization, API_SECRET);
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Você precisa estar autenticado para realizar essa requisição!' })
    }

    req.user = userInfo.data;
    
    next();
  } catch (error) {
    next(error);
  }
}