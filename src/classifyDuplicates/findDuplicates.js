// TODO: If values.length > 50M -> Use a bloom filter instead of a "hashmap"
const findDuplicates = values => {
  const uniqueValues = {};
  const duplicateValues = [];

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (!uniqueValues[value]) {
      uniqueValues[value] = 1
    } else if (uniqueValues[value] === 1) {
      uniqueValues[value] = 2;
      duplicateValues.push(value);
    } else {
      uniqueValues[value] = 2
    }
  }

  return duplicateValues;
};

module.exports = findDuplicates;
