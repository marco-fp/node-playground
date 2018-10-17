const printDuplicates = (values, log) => {
  if (!values || !values.length || !log) {
    throw new Error('printDuplicates - Wrong arguments');
  }

  const uniqueValues = new Map();

  for (let i = 0; i < values.length; i += 1) {
    const value = values[i];
    if (!uniqueValues.get(value)) {
      uniqueValues.set(value, 1);
    } else if (uniqueValues.get(value) === 1) {
      uniqueValues.set(value, 2);
      log(value);
    }
  }
};

module.exports = printDuplicates;
