const installer = require('../installer');
const { execSync } = require('child_process');

execSync.execSync = jest.fn();

describe('will it install?', () => {
  it.skip('should install dependencies', () => {
    installer('./', ['test1', 'test'], false);
    expect(execSync.execSync.mock.calls[1][0]).toEqual('npm i [test1, test]');
  });

  it.skip('should install dev dependencies', () => {
    installer('./', ['test2', 'test3'], true);
    expect(execSync.execSync.mock.calls[0][0]).toEqual('npm i -D [test2, test3]');
  });
});
