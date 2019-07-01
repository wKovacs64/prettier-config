# @wkovacs64/prettier-config

This is my personal Prettier configuration.

[![npm Version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

### Install

```
yarn add --dev prettier @wkovacs64/prettier-config
```

### Usage

Installing this package will attempt to copy a default `prettier.config.js` and
`.prettierignore` into your project if they do not already exist.

They look like this:

#### `prettier.config.js`

```js
// eslint-disable-next-line import/no-extraneous-dependencies
const prettierConfig = require('@wkovacs64/prettier-config');

module.exports = {
  ...prettierConfig,
};
```

#### `.prettierignore`

```
package.json
```

[npm-image]:
  https://img.shields.io/npm/v/@wkovacs64/prettier-config.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@wkovacs64/prettier-config
[ci-image]:
  https://img.shields.io/circleci/project/github/wKovacs64/prettier-config/master.svg?style=flat-square
[ci-url]: https://circleci.com/gh/wKovacs64/prettier-config
[semantic-release-image]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
