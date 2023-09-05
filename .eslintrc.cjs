module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    MT: false,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'global-require': 0,
    quotes: ['error', 'single'],
    indent: 0,
    'no-new': 0,
    camelcase: 0,
    'padded-blocks': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    'no-mixed-spaces-and-tabs': 0,
    'space-before-function-paren': [0, 'always'],
    'no-multiple-empty-lines': 0,
    'vue/no-v-html': 0,
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Home', 'Examples', 'Editor', 'Preview', 'Token'],
      },
    ],
  },
}
