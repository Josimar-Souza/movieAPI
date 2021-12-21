const moviesService = require('../../service/movies');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    const UpdatedRes = await moviesService.Update(req.body, id, _id);

    if (!UpdatedRes.status) {
      return res.status(UpdatedRes.statusCodes).send({ message: UpdatedRes.message });
    }

    res.status(UpdatedRes.statusCodes).send(UpdatedRes.message);
  } catch (error) {
    next(error);
  }
}