const installer = require('./installer');

const dependencies = path => {
  const dependencies = [
    'react',
    'react-dom'
  ];

  installer(path, dependencies, false);
};

module.exports = dependencies;
