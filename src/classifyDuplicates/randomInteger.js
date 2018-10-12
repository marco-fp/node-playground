const randomInteger = (
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = randomInteger;
