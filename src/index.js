const mix = require('laravel-mix')

const {
    resolveJS,
    externalJS,
    moduleJS,
    pluginJS,
    moduleCSS, // @todo add css support
    pluginCSS,
} = require('@silverstripe/webpack-config')

const Path = require('path')
const ENV = process.env.NODE_ENV
const PATHS = {
    // the root path, where your webpack.config.js is located.
    ROOT: Path.resolve(),
    // your node_modules folder name, or full path
    MODULES: 'node_modules',
    // relative path from your css files to your other files, such as images and fonts
    FILES_PATH: '../',
    // thirdparty folder containing copies of packages which wouldn't be available on NPM
    THIRDPARTY: 'thirdparty',
    // the root path to your javascript source files
    SRC: Path.resolve('client/src'),
}

mix.setPublicPath('client/dist')
mix.setResourceRoot('client/src')

mix.webpackConfig({
    devtool: (ENV !== 'production') ? 'source-map' : '',
    resolve: resolveJS(ENV, PATHS),
    externals: externalJS(ENV, PATHS),
    module: moduleJS(ENV, PATHS),
    plugins: pluginJS(ENV, PATHS)
})

// export default mix

module.exports = mix

// const Path = require('path');
// const webpack = require('webpack');
// // Import the core config
// const webpackConfig = require('@silverstripe/webpack-config');
// const {
//   resolveJS,
//   externalJS,
//   moduleJS,
//   pluginJS,
//   moduleCSS,
//   pluginCSS,
// } = webpackConfig;

// const ENV = process.env.NODE_ENV;
// const PATHS = {
//   // the root path, where your webpack.config.js is located.
//   ROOT: Path.resolve(),
//   // your node_modules folder name, or full path
//   MODULES: 'node_modules',
//   // relative path from your css files to your other files, such as images and fonts
//   FILES_PATH: '../',
//   // thirdparty folder containing copies of packages which wouldn't be available on NPM
//   THIRDPARTY: 'thirdparty',
//   // the root path to your javascript source files
//   SRC: Path.resolve('client/src'),
// };

// const config = [
//   {
//     name: 'js',
//     entry: {
//       main: 'js/src/main.js'
//     },
//     output: {
//       path: 'js/dist',
//       filename: '[name].bundle.js',
//     },
//     devtool: (ENV !== 'production') ? 'source-map' : '',
//     resolve: resolveJS(ENV, PATHS),
//     externals: externalJS(ENV, PATHS),
//     module: moduleJS(ENV, PATHS),
//     plugins: pluginJS(ENV, PATHS),
//   },
//   {
//     name: 'css',
//     entry: {
//       main: 'css/src/main.scss'
//     },
//     output: {
//       path: 'css/dist',
//       filename: '[name].css'
//     },
//     devtool: (ENV !== 'production') ? 'source-map' : '',
//     module: moduleCSS(ENV, PATHS),
//     plugins: pluginCSS(ENV, PATHS),
//   },
// ];

// module.exports = config;
