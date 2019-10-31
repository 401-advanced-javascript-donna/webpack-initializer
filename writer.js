const fs = require('fs');

// Puts String into file, example .travis.yml, .gitignore, webpack.config.js
const write = (path, str) => {
  fs.writeFileSync(path, str, 'utf8');
};

// Puts JSON into , example eslint, package.json, babelrc
const writeJson = (path, obj) => {
  write(path, JSON.stringify(obj));
};

module.exports = {
  write,
  writeJson
};
