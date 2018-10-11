const findDuplicates = require('./findDuplicates');

describe("findDuplicates", () => {
  it("Returns the duplicates of an array passed as a parameter", () => {
    const values = [2, 3, 3, 2];
    const duplicates = findDuplicates(values);
    expect(duplicates).toEqual([3, 2]);
  })
})
