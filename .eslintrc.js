module.exports = {
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'no-console': 'off'
  }
}
