const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: { auto: true, typescript: true },
  rules: {
    'react/function-component-definition': 'off',
  },
});
