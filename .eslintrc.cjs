module.exports = {
  extends: ['plugin:wkovacs64/base', 'prettier'],
  settings: {
    react: {
      // config hack to work around eslint-plugin-react crying
      version: '99999',
    },
  },
};
