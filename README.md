# @wkovacs64/prettier-config

This is my personal [Prettier][prettier] configuration.

[![npm Version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url]
[![changesets][changesets-image]][changesets-url]

### Install

```
npm install --save-dev @wkovacs64/prettier-config
```

> Be sure to install the appropriately versioned `prettier` peer dependency as
> well.

### Usage

Follow the Prettier documentation on [sharing configurations][prettier-sharing].

### Examples

#### `package.json`

```
{
  "prettier": "@wkovacs64/prettier-config",
  "scripts": {
    ...
    "format": "prettier --cache --write .",
    "format:check": "prettier --cache --check .",
    ...
  }
}
```

#### `.prettierignore`

```
.changeset
package.json
package-lock.json
```

### Customization

If you need to customize the configuration, you can use a dedicated Prettier
config file instead of the one-liner in package.json:

#### `prettier.config.js`

```js
import prettierConfig from '@wkovacs64/prettier-config';

/** @type {import("prettier").Options} */
export const config = {
  ...prettierConfig,
  // overrides here
};

export default config;
```

[npm-image]:
  https://img.shields.io/npm/v/@wkovacs64/prettier-config.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@wkovacs64/prettier-config
[ci-image]:
  https://img.shields.io/github/actions/workflow/status/wKovacs64/prettier-config/ci.yml?logo=github&style=flat-square
[ci-url]:
  https://github.com/wKovacs64/prettier-config/actions?query=workflow%3Aci
[changesets-image]:
  https://img.shields.io/badge/maintained%20with-changesets-blue?style=flat-square
[changesets-url]: https://github.com/changesets/changesets
[prettier]: https://prettier.io/
[prettier-sharing]:
  https://prettier.io/docs/en/configuration.html#sharing-configurations
