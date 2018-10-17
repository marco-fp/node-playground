const printDuplicates = require('./printDuplicates');

describe('printDuplicates', () => {
  it('should print the duplicates of an array passed as a parameter', () => {
    const values = [2, 3, 3, 2];
    const log = jest.fn();
    printDuplicates(values, log);
    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenCalledWith(3);
    expect(log).toHaveBeenCalledWith(2);
  });

  it('should throw an error if the arguments are incorrect', () => {
    const withNoParameters = () => printDuplicates();
    /* eslint-disable-next-line no-console */
    const withEmptyValues = () => printDuplicates([], console.log);
    expect(withNoParameters).toThrow();
    expect(withEmptyValues).toThrow();
  });
});
