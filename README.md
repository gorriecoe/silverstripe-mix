# Introduction

Silverstripe Mix is a wrapper around Laravel Mix to simplify SS module and theme development.

## Installation

1. Run `npm install silvertripe-mix`.
1. Add the following NPM scripts to your `package.json` file.

```json
"scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}
```

1. Create a `webpack.mix.js` NOT `webpack.config.js` file, with the following:

```js
const mix = require('silverstripe-mix')
```

1. Refer to [documentation](#documentation) for additional required configuration.

## Documentation

You may review the initial documentation via [Laravel Mix](https://laravel-mix.com/docs/4.0/basic-example) with it's default configuation defined using [silverstripe/webpack-config](https://github.com/silverstripe/webpack-config)

## License

Laravel Mix is open-sourced software licensed under the [BSD license](http://opensource.org/licenses/MIThttps://opensource.org/licenses/BSD-3-Clause)
