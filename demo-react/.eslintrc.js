module.exports = {
  extends: '@antfu',
  root: true,
  rules: {
    // 允许使用箭头函数
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'antfu/top-level-function': 'off',
    // 不允许多个import
    'no-duplicate-imports': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],,
    'curly': 'off'
  },
}
