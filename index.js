const fs = require('fs');
const packageJsonWriter = require('./package-json-writer');
const eslintWriter = require('./eslint-writer');
const babelWriter = require('./babel-writer');
const gitIgnoreWriter = require('./gitignore-writer');
const travisWriter = require('./travis-write');
const webpackConfigWriter = require('./webpack-writer');
const srcIndexWriter = require('./src-index-writer');
const devDependenciesInstall = require('./dev-dependencies-installer');
const dependenciesInstall = require('./dependecies-installer');

const path = process.argv[process.argv.length - 1];

if(path !== '.') fs.mkdirSync(path);

fs.mkdirSync(`${path}/src`);

packageJsonWriter(`${path}/package.json`);
eslintWriter(`${path}/.eslintrc`);
babelWriter(`${path}/.babelrc`);
gitIgnoreWriter(`${path}/.gitignore`);
travisWriter(`${path}/.travis.yml`);
webpackConfigWriter(`${path}/webpack.config.js`);
srcIndexWriter(`${path}/src/index.js`, `${path}/src/index.html`);
devDependenciesInstall(`${path}`);
dependenciesInstall(`${path}`);
