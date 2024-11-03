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
}
