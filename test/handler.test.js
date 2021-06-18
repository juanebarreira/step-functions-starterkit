const handler = require('../src/handler');

describe('Handler test', () => {
  beforeEach(async () => {
    jest.clearAllMocks();
  });

  it('should logs the randomIntInMsgTask message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    // eslint-disable-next-line no-empty-function
    handler.randomIntInMsgTask({}, {}, () => {});
    expect(consoleSpy).toHaveBeenCalledWith('randomIntInMsgTask invocation');
  });

  it('should logs the isGreater message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    // eslint-disable-next-line no-empty-function
    handler.isGreater({}, {}, () => {});
    expect(consoleSpy).toHaveBeenCalledWith('isGreater invocation');
  });

  it('should logs the isLower message', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    // eslint-disable-next-line no-empty-function
    handler.isLower({}, {}, () => {});
    expect(consoleSpy).toHaveBeenCalledWith('isLower invocation');
  });
});
