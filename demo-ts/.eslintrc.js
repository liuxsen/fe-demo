module.exports = {
  extends: '@antfu',
  root: true,
  rules: {
    // 允许使用箭头函数
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
}
