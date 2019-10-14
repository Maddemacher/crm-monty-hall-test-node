module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'jest'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    'import/prefer-default-export': 0,
    'no-console': 0
  },
  env: {
    'jest/globals': true,
    browser: true
  },

  globals: {
    process: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  settings: {
    react: {
      version: 'detect'
    }
  }
};
