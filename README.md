# @wkovacs64/prettier-config

This is my personal [Prettier][prettier] configuration.

[![npm Version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

### Install

```
yarn add --dev prettier @wkovacs64/prettier-config
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
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,html,css,json,md,mdx,yml,yaml}\"",
    ...
  }
}
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
[prettier]: https://prettier.io/
[prettier-sharing]:
  https://prettier.io/docs/en/configuration.html#sharing-configurations
