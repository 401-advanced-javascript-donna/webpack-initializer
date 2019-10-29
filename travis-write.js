const { write } = require('./writer');

const createTravis = path => {
  const travis = `
  language: node_js
  node_js: node
  `;

  write(path + './webpack.config.js', travis);
};

module.exports = createTravis;
