const multer = require('multer');
const { StatusCodes } = require('http-status-codes');
const moviesService = require('../../service/movies');

const validateFile = (file) => {
  const { mimetype } = file;
  if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
    return { status: false, message: 'Somente arquivos jpeg ou png' };
  }

  return { status: true };
}

const validateUserReq = async (id, user) => {
  const movie = await moviesService.GetByID(id);

  if (!movie) return { status: false, message: 'Filme não encontrado' };

  if (movie.userId !== user._id) return { status: false, message: 'Você só pode adicionar imagen para filmes que você adicionou' };

  return { status: true };
}

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const { id } = req.params;
    const { user } = req;

    const isFileValid = validateFile(file);
    const isUserReqValid = await validateUserReq(id, user);

    if (!isFileValid.status) {
      return req.res.status(StatusCodes.BAD_REQUEST).send({ message: isFileValid.message });
    }

    if (!isUserReqValid.status) {
      return req.res.status(StatusCodes.BAD_REQUEST).send({ message: isUserReqValid.message });
    }

    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const { id } = req.params;
    const fileExtension = file.mimetype.split('/')[1];

    cb(null, `${id}.${fileExtension}`);
  },
});

module.exports = multer({ storage });