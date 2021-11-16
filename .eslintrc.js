module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: ['standard'],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  settings: {
    'svelte3/typescript': require('typescript')
  },
  plugins: ['svelte3', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    indent: ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
    // for svelte
    // '@typescript-eslint/consistent-type-imports': [
    //   'error',
    //   { prefer: 'type-imports' },
    // ],
  }
}
