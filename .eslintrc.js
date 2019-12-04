module.exports = {
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    // eslint rules
    'one-var': 2,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env === 'development' ? 0 : 2,
    'no-console': process.env === 'development' ? 0 : 2,
    'semi': 0,
    'no-extra-semi': 2,
    'space-before-function-paren': [2, 'never'],
    'eqeqeq': 0,
    'spaced-comment': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'new-cap': 0,
    'camelcase': 0,
    'no-new': 0,
    'indent': [2, 2],
    'max-len': [2, {'code': 120}],
    'no-var': 2,
    'valid-jsdoc': [2, {
      'requireReturn': false,
      'requireParamDescription': false,
      'requireReturnDescription': true
    }],
    'quotes': [2, 'single'],
    'no-nested-ternary': 2,

    // typescript-eslint rules
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/explicit-function-return-type': 0,
    "@typescript-eslint/explicit-member-accessibility": 0,

    // vue
    'vue/no-parsing-error': [0, { 'x-invalid-end-tag': false }],
    'vetur.experimental.templateInterpolationService': 0,
    'vue/array-bracket-spacing': 2,
    'vue/arrow-spacing': 2,
    'vue/block-spacing': 2,
    'vue/brace-style': 2,
    'vue/camelcase': 2,
    'vue/comma-dangle': 2,
    'vue/component-name-in-template-casing': 2,
    'vue/eqeqeq': 2,
    'vue/key-spacing': 2,
    'vue/match-component-file-name': 2,
    'vue/object-curly-spacing': 2,
    'vue/html-self-closing': [2, {
      'html': {
        'void': 'always',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/max-attributes-per-line': 0,
    'vue/html-quotes': [0, 'single'],
    'vue/match-component-file-name': [2, {
      'extensions': ['ts', 'vue'],
      'shouldMatchCase': false
    }],
    'vue/no-template-shadow': 2
  },
  overrides: [
    {
      files: [
        '**/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
