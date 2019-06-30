# @wkovacs64/prettier-config

This is my personal Prettier configuration.

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
module.exports = {
  ...require('@wkovacs64/prettier-config'),
};
```

#### `.prettierignore`

```
package.json
```
