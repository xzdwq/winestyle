module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ['.vue', '.d.ts'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 1,
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'vue/require-default-prop': 1,
  },
  overrides: [
    {
      files: [ './**/*.ts', 'stories/**/*.ts' ],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'tailwind.config.js',
  ],
}
