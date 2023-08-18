# Config to add in the .eslintrc file to add the tsconfig

```js
parserOptions: {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: __dirname,
}
```
