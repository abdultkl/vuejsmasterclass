const { rules } = require('eslint-plugin-vue')

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslin-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'vue-multi-word-component-names': 0,
  },
}
