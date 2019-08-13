import globalThisX from '../src/global-this-x';

describe('globalThisX', function() {
  it('is an object', function() {
    expect.assertions(2);
    expect(globalThisX).not.toBeNull();
    expect(typeof globalThisX).toBe('object');
  });

  it('is the global this', function() {
    expect.assertions(1);
    expect(globalThisX).toBe(Function('return this;')());
  });
});
