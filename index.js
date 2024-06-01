/** @type {import("prettier").Options} */
module.exports = {
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
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  rangeEnd: Infinity,
  rangeStart: 0,
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  tabWidth: 2,
  useTabs: false,
  vueIndentScriptAndStyle: false,

  // customized
  singleQuote: true,
  trailingComma: 'all',

  // workaround for https://github.com/changesets/changesets/issues/774
  overrides: [
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
