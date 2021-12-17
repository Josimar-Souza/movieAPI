const usersService = require('../../service/users');

module.exports = async (req, res, next) => {
  try {
    const isLoggedIn = await usersService.Login(req.body);

    if (!isLoggedIn.isValid) {
      return res.status(isLoggedIn.status).send({ message: isLoggedIn.message });
    }

    return res.status(isLoggedIn.status).send({ token: isLoggedIn.message });
  } catch (error) {
    next(error);
  }
}