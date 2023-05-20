module.exports = {
  root: true,
  env: {
    browser: false,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/restrict-template-expressions': 'off',
    'no-await-in-loop': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'prefer-promise-reject-errors': 'warn',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    complexity: ['error', 10],
  },
  ignorePatterns: ['src/**/*.test.ts', '.eslintrc.cjs', '*.d.ts', 'dist'],
};
