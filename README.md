# About
Training and Production Center Site


## Getting started

Install packages with npm (originally v9.1.2) nodeJS v19.0.0:
```sh
npm install
```

Project workflow is based on [webpack](https://webpack.js.org/).

## Scripts

For development using webpack-dev-server:

```sh
npm run start
```
Build for production:

```sh
npm run build
```

## Project structure

```text
├── build                - Production build folder
├─┬ src                  - Source folder
│ ├── scss               - SСSS files
│ ├── js                 - JavaScript files
| ├─┬ static             - Other files
| | └── favicon          - Favicons set
│ ├── vendor             - Side scripts and files
│ └── index.html         - HTML frontend development file
├── package.json         - Settings for Node.js
├── webpack.dev.js       - Development settings for Webpack
└── webpack.build.js     - Production settings for Webpack
```
