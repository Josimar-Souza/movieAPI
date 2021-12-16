const verifyParams = (body) => {
  const { name, director, gender, releaseYear } = body;

  if (!name) return false;
  if (!director) return false;
  if (!gender) return false;
  if (!releaseYear) return false;

  return true;
}

const verifyParamsType = (body) => {
  const { name, director, gender, releaseYear } = body;

  if (typeof (name) !== 'string') return false;
  if (typeof (director) !== 'string') return false;
  if (typeof (gender) !== 'string') return false;
  if (typeof (releaseYear) !== 'number') return false;

  return true;
}

module.exports = (body) => {
  try {
    const hasParams = verifyParams(body);
    const paramsType = verifyParamsType(body);

    if (!hasParams || !paramsType) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
  }
}