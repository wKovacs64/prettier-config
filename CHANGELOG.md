# Change Log

## 4.2.3

### Patch Changes

- [#129](https://github.com/wKovacs64/prettier-config/pull/129) [`f78750e`](https://github.com/wKovacs64/prettier-config/commit/f78750e98a098c421ff8c377579a99c9155f1d20) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Import our dependencies instead of relying on magic string resolution to enable compatibility with non-hoisting package managers like pnpm.

## 4.2.2

### Patch Changes

- [#122](https://github.com/wKovacs64/prettier-config/pull/122) [`f92e64d`](https://github.com/wKovacs64/prettier-config/commit/f92e64d1023ce04ecab8b8577af8d7da4544271c) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update `prettier-plugin-tailwindcss` to v0.6.14.

## 4.2.1

### Patch Changes

- [#115](https://github.com/wKovacs64/prettier-config/pull/115) [`a2ed687`](https://github.com/wKovacs64/prettier-config/commit/a2ed6870e40bad2a3a458da5e80caae7f092990c) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Fix Astro support.

## 4.2.0

### Minor Changes

- [#111](https://github.com/wKovacs64/prettier-config/pull/111) [`a0c0a77`](https://github.com/wKovacs64/prettier-config/commit/a0c0a77b223f49a45c35106f75727b21e6142f2e) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Add `prettier-plugin-astro` for Astro support.

### Patch Changes

- [#112](https://github.com/wKovacs64/prettier-config/pull/112) [`7daf170`](https://github.com/wKovacs64/prettier-config/commit/7daf1707890f0ef2f84510841aef453f2f7e8d6c) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Update `prettier-plugin-tailwindcss` to v0.6.12.

## 4.1.1

### Patch Changes

- [#104](https://github.com/wKovacs64/prettier-config/pull/104) [`89f0883`](https://github.com/wKovacs64/prettier-config/commit/89f08833e63c2e4e5f09cbe600cc408be449673a) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Add `package.json` to package exports.

## 4.1.0

### Minor Changes

- [#102](https://github.com/wKovacs64/prettier-config/pull/102) [`da27223`](https://github.com/wKovacs64/prettier-config/commit/da2722355de13cbf1b0a581c65f556d42ae441de) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Increase `printWidth` from 80 to 100. It's time.

## 4.0.1

### Patch Changes

- [#100](https://github.com/wKovacs64/prettier-config/pull/100) [`03be6be`](https://github.com/wKovacs64/prettier-config/commit/03be6be8e6307511053522a5ad7d0bc5857c9f56) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Flatten module `exports` to provide a better error message if consumed from CJS.

## 4.0.0

### Major Changes

- [#98](https://github.com/wKovacs64/prettier-config/pull/98) [`e1a8f4a`](https://github.com/wKovacs64/prettier-config/commit/e1a8f4ab01c325067a46ca38ae65cde81e8f7c3c) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Drop support for Node v14 and v16. This package now requires Node v18 or higher.

- [#99](https://github.com/wKovacs64/prettier-config/pull/99) [`f0005e6`](https://github.com/wKovacs64/prettier-config/commit/f0005e6f40193132e5019395e60604313e9b9a81) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Convert project to ESM. Currently, no CJS version will be published.

- [#96](https://github.com/wKovacs64/prettier-config/pull/96) [`b4dacda`](https://github.com/wKovacs64/prettier-config/commit/b4dacdacbd9413162045ce318e8fe21f349f4ecf) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Add `prettier-plugin-tailwindcss`. The only reason this constitutes a major version is because this plugin requires a newer version of Node.js (v14.21.3) than what we required previously (v8.9.0). No dependent projects should be using Node versions that old anyway, so it shouldn't really matter.

## 3.0.3

### Patch Changes

- [`48e3a6b`](https://github.com/wKovacs64/prettier-config/commit/48e3a6bbde3b2eef99e9c2eb3e50cab915428145) Thanks [@wKovacs64](https://github.com/wKovacs64)! - add singleAttributePerLine option as introduced in prettier v2.6.0

- [`b4cd398`](https://github.com/wKovacs64/prettier-config/commit/b4cd39825a9fbafff26cd09c65e661d2bf03f088) Thanks [@wKovacs64](https://github.com/wKovacs64)! - Write version bumps to `package-lock.json`.
