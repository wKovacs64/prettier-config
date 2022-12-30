# @wkovacs64/prettier-config

This is my personal [Prettier][prettier] configuration.

[![npm Version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

### Install

```
npm install --save-dev prettier @wkovacs64/prettier-config
```

### Usage

Follow the Prettier documentation on [sharing configurations][prettier-sharing].

### Examples

#### `prettier.config.js`

```js
const prettierConfig = require('@wkovacs64/prettier-config');

module.exports = {
  ...prettierConfig,
  // overrides here
};
```

#### `.prettierignore`

```
package.json
```

#### `package.json`

```
{
  "scripts": {
    ...
    "format": "prettier --write .",
    ...
  }
}
```

[npm-image]:
  https://img.shields.io/npm/v/@wkovacs64/prettier-config.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@wkovacs64/prettier-config
[ci-image]:
  https://img.shields.io/github/actions/workflow/status/wKovacs64/prettier-config/ci.yml?logo=github&style=flat-square
[ci-url]:
  https://github.com/wKovacs64/prettier-config/actions?query=workflow%3Aci
[semantic-release-image]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[prettier]: https://prettier.io/
[prettier-sharing]:
  https://prettier.io/docs/en/configuration.html#sharing-configurations
