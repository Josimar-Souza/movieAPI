const usersModel = require('../../../model/users');

const verifyParams = async (body) => {
  const { email, password }  = body;

  const user = await usersModel.GetByEmail(email);

  if (user) return { status: false, message: 'Usuário já existe' };

  if (!email) return { status: false, message: 'Informe um email válido' };
  if (!password) return { status: false, message: 'Informe uma senha válida' };

  return { status: true };
}

const verifyPattern = (body) => {
  const { email, password }  = body;
  const emailPatter = /^[a-z0-9]+[._-]?[a-z0-9]+(@)((gmail)|(hotmail))(\.com)$/im;
  const passwordPatter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*.\-_])[a-zA-Z\d!#$%&*.\-_]{8,}$/;

  if (!emailPatter.test(email)) {
    return { status: false, message: 'Email inválido!' };
  }

  if (!passwordPatter.test(password)) {
    return { status: false, message: 'Senha deve conter no mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número,  1 caracter especial (!#$%&*.-_)' };
  };

  return { status: true };
}

module.exports = async (body) => {
  try {
    const hasParams = await verifyParams(body);
    const isPatternValid =  verifyPattern(body);

    if (!hasParams.status) return hasParams;
    if (!isPatternValid.status) return isPatternValid;

    return { status: true };
  } catch (error) {
    console.log(error);
  }
}