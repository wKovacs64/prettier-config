# Change Log

## 4.0.0

### Major Changes

- [#98](https://github.com/wKovacs64/prettier-config/pull/98) [`e1a8f4a`](https://github.com/wKovacs64/prettier-config/commit/e1a8f4ab01c325067a46ca38ae65cde81e8f7c3c) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Drop support for Node v14 and v16. This package now requires Node v18 or higher.

- [#99](https://github.com/wKovacs64/prettier-config/pull/99) [`f0005e6`](https://github.com/wKovacs64/prettier-config/commit/f0005e6f40193132e5019395e60604313e9b9a81) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Convert project to ESM. Currently, no CJS version will be published.

- [#96](https://github.com/wKovacs64/prettier-config/pull/96) [`b4dacda`](https://github.com/wKovacs64/prettier-config/commit/b4dacdacbd9413162045ce318e8fe21f349f4ecf) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Add `prettier-plugin-tailwindcss`. The only reason this constitutes a major version is because this plugin requires a newer version of Node.js (v14.21.3) than what we required previously (v8.9.0). No dependent projects should be using Node versions that old anyway, so it shouldn't really matter.

## 3.0.3

### Patch Changes

- [`48e3a6b`](https://github.com/wKovacs64/prettier-config/commit/48e3a6bbde3b2eef99e9c2eb3e50cab915428145) Thanks [@wKovacs64](https://github.com/wKovacs64)! - add singleAttributePerLine option as introduced in prettier v2.6.0

- [`b4cd398`](https://github.com/wKovacs64/prettier-config/commit/b4cd39825a9fbafff26cd09c65e661d2bf03f088) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Write version bumps to `package-lock.json`.
