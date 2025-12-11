import * as astroPlugin from 'prettier-plugin-astro';
import * as tailwindPlugin from 'prettier-plugin-tailwindcss';

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

  plugins: [astroPlugin, tailwindPlugin],
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
