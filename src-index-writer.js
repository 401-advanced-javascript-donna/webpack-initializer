const { writer } = require('./writer');

const createIndexJs = path => {
  const indexJs = `
  #!/usr/bin/env node
  import React from 'react';
  import { render } from 'react-dom';
  import App from './components/App';
  
  render(
    <App />,
    document.getElementById('root')
  );
  `;

  writer(path + './src/index.js', indexJs);
};

const createIndexHtml = path => {
  const indexHtml = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Webpack stuff</title>
  </head>
  
  <body>
    <div id="root"></div>
  </body>
  
  </html>
  `;

  writer(path + './src/index.html', indexHtml);
};

module.exports = {
  createIndexJs,
  createIndexHtml
};
