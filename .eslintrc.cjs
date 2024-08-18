const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true,
    typescript: {
      parserProject: true,
      resolverProject: './tsconfig.json',
    },
  },
  rules: {
    'react/function-component-definition': 'off',
  },
});
