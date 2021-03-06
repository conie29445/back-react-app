module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-extend-native': 'off',
    'prefer-promise-reject-errors': 'off',
    'standard/no-callback-literal': 'off',
    'react/react-in-jsx-scope': 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'line-comment-position': [
      'error', {
        position: 'above',
      },
    ],
    'react/prop-types': 'off',
    'comma-spacing': 'error',
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'key-spacing': ['error', { 'beforeColon': false }],
    'no-multiple-empty-lines': 'error',
    'quotes': ['error', 'single'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
  },
}
