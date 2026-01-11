import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @type {import("prettier").Options} */
export default {
  $schema: 'http://json.schemastore.org/prettierrc',

  // defaults
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  rangeEnd: Infinity,
  rangeStart: 0,
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,

  // customized
  printWidth: 100,
  singleQuote: true,

  // Use require.resolve() to get absolute paths (strings) instead of importing plugin modules
  // directly. This makes the config serializable for the VSCode Prettier extension's worker thread,
  // while also ensuring plugins resolve correctly with non-hoisting package managers like pnpm.
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  tailwindAttributes: ['class', 'className', '.*[cC]lassName'],
  tailwindFunctions: ['clsx', 'cn'],

  // workaround for https://github.com/changesets/changesets/issues/774
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: ['**/.changeset/*.md', 'CHANGELOG.md'],
      options: {
        proseWrap: 'never',
      },
    },
  ],
};
