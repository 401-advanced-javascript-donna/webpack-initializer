/* eslint-disable no-console */
const installer = (path, dependencies, dev) => {
  const { execSync } = require('child_process');
  if(dev) {
    console.log('Installing dependencies...');
    execSync(`npm i -D ${dependencies.join(' ')}`, {
      cwd: path,
      stdio: 'inherit'
    });
  } else {
    console.log('Installing dependencies...');
    execSync(`npm i ${dependencies.join(' ')}`, {
      cwd: path,
      stdio: 'inherit'
    });
  }
  console.log('Finished installing dependencies...');
};

module.exports = installer;
