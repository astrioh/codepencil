module.exports = {
  env: { browser: true, es2020: true },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  parser: '@typescript-eslint/parser',
  files: ['**/*.ts', '**/*.tsx'],
  plugins: ['react-refresh', 'import'],
  settings: {
    react: { version: 'detect' },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
    },
  },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
  },
};
