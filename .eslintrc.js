module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-pug/all"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
  },
  "plugins": [
    "react",
    "react-pug",
  ],
  "rules": {
    'react-pug/prop-types': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-extend-native': 'off',
    'prefer-promise-reject-errors': 'off',
    'standard/no-callback-literal': 'off',
    "react/react-in-jsx-scope": "off",
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
    "react/prop-types": "off",
    'comma-spacing': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'key-spacing': ["error", { "beforeColon": false }],
  },
}
