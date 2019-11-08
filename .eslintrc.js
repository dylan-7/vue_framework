module.exports = {
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    // eslint rules
    'one-var': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 0,
    'no-console': 0,
    semi: [2, 'always'],
    'no-extra-semi': 2,
    'space-before-function-paren': 0,
    eqeqeq: 0,
    'spaced-comment': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'new-cap': 0,
    'camelcase': 2,
    'no-new': 0,
    indent: 'off',

    // typescript-eslint rules
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 0
  }
}
