# @wkovacs64/prettier-config

This is my personal Prettier configuration.

### Install

```
yarn add --dev @wkovacs64/prettier-config
```

### Usage

Extend in your `prettier.config.js`:

```js
module.exports = {
  ...require('@wkovacs64/prettier-config'),
};
```

Or, add directly to `package.json`:

```json
"prettier": "@wkovacs64/prettier-config",
```

You probably also want to create a `.prettierignore` with at least the following
in it:

```
package.json
```
