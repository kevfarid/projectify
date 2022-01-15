module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 7,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/newline-after-import': 'error',
    'no-shadow': 'off',
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'arrow-body-style': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    {
      files: ['./src/components/**/index.js'],
      rules: {
        'no-restricted-exports': 'off',
      },
    },
  ],
}
