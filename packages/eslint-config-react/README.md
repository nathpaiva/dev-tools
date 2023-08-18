# Config to add in the .eslintrc file to add the tsconfig

# Required dependencies

```json
{
  "@typescript-eslint/eslint-plugin": "^6.4.0",
  "@typescript-eslint/parser": "^6.4.0",
  "eslint": "^8.47.0",
  "eslint-config-prettier": "^9.0.0",
  "eslint-plugin-import-helpers": "^1.3.1",
  "eslint-plugin-jsx-a11y": "^6.7.1",
  "eslint-plugin-prettier": "^5.0.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.3",
  "prettier": "^3.0.2"
}
```

# `.eslintrc.cjs` config

```cjs
module.exports = {
  extends: [
    '@nathpaiva/eslint-config-react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  }
}
```

# lint scripts

```json
{
  "lint": "tsc --project tsconfig.json --noEmit && eslint src --ext ts,tsx",
  "format": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
}
```

