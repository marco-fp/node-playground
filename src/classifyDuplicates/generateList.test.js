const generateList = require('./generateList');

describe('generateList', () => {
  it('Given N as parameter, should generate a list of N + 1 size.', () => {
    const size = 3;
    const list = generateList(size);
    expect(list).toHaveLength(size + 1);
  });

  it('Given N as parameter, should generate a list with values withing the range [1, N]', () => {
    const size = 3;
    const list = generateList(size);
    list.forEach((value) => {
      expect(value).toBeLessThanOrEqual(size);
      expect(value).toBeGreaterThanOrEqual(1);
    });
  });
});
