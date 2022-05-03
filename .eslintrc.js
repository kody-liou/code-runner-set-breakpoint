const env = {
  es2021: true,
  node: true,
};

const rules = {
  'import/prefer-default-export': 'off',
  'import/no-default-export': 'error',
  'no-use-before-define': [
    'error',
    { functions: true, classes: true, variables: true },
  ],
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],
  'no-continue': 'off',
  'max-classes-per-file': ['error', 20],
  'no-underscore-dangle': [
    'error',
    {
      allowAfterThis: true,
    },
  ],
  'no-console': 'off',
  'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  'import/extensions': [
    'error',
    {
      ts: 'never',
    },
  ],
  'linebreak-style': 0,
  'import/no-unresolved': 'error',
  'prettier/prettier': [
    'error',
    {
      tabWidth: 2,
      endOfLine: 'auto',
      singleQuote: true,
      trailingComma: 'all',
      arrowParens: 'avoid',
      printWidth: 80,
      bracketSpacing: true,
      jsxBracketSameLine: true,
    },
    {
      usePrettierrc: false,
    },
  ],
};

const parserOptions = {
  ecmaVersion: 12,
  sourceType: 'module',
};

module.exports = {
  env,
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions,
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    ...rules,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  overrides: [
    {
      files: ['*.js'],
      env,
      extends: ['airbnb-base'],
      parserOptions,
      rules,
    },
    {
      files: ['*.json'],
      env,
      extends: ['airbnb-base'],
      plugins: ['json-format'],
      parserOptions,
      rules,
    },
  ],
};
