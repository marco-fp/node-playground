const generateList = (listSize = 1000000) => {
  const list = [];
  for(let i = 0; i < listSize + 1; i++) {
    list.push(getRandomInteger(1, listSize));
  }
  return list;
}

const getRandomInteger = (min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = generateList;
