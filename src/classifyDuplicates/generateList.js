const randomInteger = require('./randomInteger');

const generateList = (listSize) => {
  if (!listSize || listSize <= 0) {
    throw new Error('generateList - Wrong arguments');
  }

  const list = [];
  for (let i = 0; i < listSize + 1; i += 1) {
    list.push(randomInteger(1, listSize));
  }
  return list;
};


module.exports = generateList;
