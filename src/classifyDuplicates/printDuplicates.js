const printDuplicates = (values, log) => {
  if (!values || !values.length || !log) {
    throw new Error('printDuplicates - Wrong arguments');
  }

  const uniqueValues = {};

  for (let i = 0; i < values.length; i += 1) {
    const value = values[i];
    if (!uniqueValues[value]) {
      uniqueValues[value] = 1;
    } else if (uniqueValues[value] === 1) {
      uniqueValues[value] = 2;
      log(value);
    }
  }
};

module.exports = printDuplicates;
