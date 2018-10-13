/* eslint-disable no-console */
const classifyDuplicates = require('./classifyDuplicates');

const {
  generateList,
  printDuplicates,
} = classifyDuplicates;

let size = 1000000;
if (process.argv.length > 2) {
  size = parseInt(process.argv[2], 10);
}

const list = generateList(size);
printDuplicates(list, console.log);
