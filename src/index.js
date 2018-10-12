/* eslint-disable no-console */
const classifyDuplicates = require('./classifyDuplicates');

const {
  generateList,
  findDuplicates,
} = classifyDuplicates;

let size = 1000000;
if (process.argv.length > 2) {
  size = parseInt(process.argv[2], 10);
}


const list = generateList(size);
const duplicates = findDuplicates(list);

console.log('List is: ', list);
console.log('Duplicates are: ', duplicates);
