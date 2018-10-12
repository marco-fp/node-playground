const randomInteger = require('./randomInteger');

describe('randomInteger', () => {
  it('should generate a random integer between the given boundaries', () => {
    const rand = randomInteger(0, 10);
    expect(rand).toBeLessThanOrEqual(10);
    expect(rand).toBeGreaterThanOrEqual(0);
  });
});
