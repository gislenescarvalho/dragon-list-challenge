module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:react/jsx-runtime",
    "plugin:testing-library/react",
    "plugin:jest/all",
    'plugin:security/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
    babelOptions: {
      presets: ["@babel/preset-react"]
   },
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'array-callback-return': 'error',
    complexity: ['error', 5],
    'max-statements': ['error', 13],
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],
    'max-nested-callbacks': ['error', 3],
    'max-depth': [
      'error',
      {
        max: 2
      }
    ],
    'max-lines': ['error', 250],
    'no-eval': 'error',
    'no-return-assign': 'error',
    'no-param-reassign': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-console': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  plugins: ['react', 'react-hooks', 'security']
}
