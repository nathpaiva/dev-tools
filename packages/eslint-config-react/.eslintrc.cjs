module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',

    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',

    'plugin:react/recommended',
    'plugin:react/jsx-runtime',

    'plugin:jsx-a11y/recommended',

    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'eslint-plugin-import-helpers',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    semi: 'off',

    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/require-default-props': 0,

    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-floating-promises': 0,

    'react-hooks/exhaustive-deps': 'warn',

    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,

    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
}
