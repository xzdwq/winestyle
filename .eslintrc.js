module.exports = {
  root: true,
  env: {
    node: true,
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
    'no-unused-vars': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
  },
  overrides: [
    {
      files: [ 'app/**/*.ts', 'stories/**/*.ts' ],
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
    'prettier.config.js'
  ],
}
