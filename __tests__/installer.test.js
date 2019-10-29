const installer = require('../installer');
const childProcess = require('child_process');


describe('will it install?', () => {
  const path = './';

  it('should install dependencies', () => {
    childProcess.execSync = jest.fn();
    const dep = ['react'];
    installer(path, dep, false);
    expect(childProcess.execSync.mock.calls[0][0]).toBe('npm i react');
  });

  it('should install dev dependencies', () => {
    childProcess.execSync = jest.fn();
    const dep = ['eslint', 'nodemon'];
    installer(path, dep, true);
    expect(childProcess.execSync.mock.calls[0][0]).toBe('npm i -D eslint nodemon');
  });
});
