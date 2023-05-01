module.exports = {
  parser: 'vue-eslint-parser',
  printWidth: 80,
  endOfLine: 'lf',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    // override/add rules settings here, such as:
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        printWidth: 80,
        trailingComma: 'all',
        semi: false,
        jsxSingleQuote: false,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
      },
    ],
  },
}
