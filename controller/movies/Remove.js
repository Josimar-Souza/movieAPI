const moviesService = require('../../service/movies');

module.exports = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { id } = req.params;

    const deleted = await moviesService.Remove(id, _id);

    if (!deleted.status) {
      return res.status(deleted.statuscode).send({ message: deleted.message });
    }

    return res.status(deleted.statuscode).end();
  } catch (error) {
    next(error);
  }
}