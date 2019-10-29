const { execSync } = require('child_process');

const installer = (path, dependencies, dev) => {
  let depType;
  if(dev) depType = ' -D';
  if(!dev) depType = '';
  execSync(`npm i ${depType} ${dependencies.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  // eslint-disable-next-line no-console
  console.log('Finished installing dependencies...');
};

module.exports = installer;
