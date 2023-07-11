
// 确保所有的情况都回返回值 noImplicitReturns
export const sum = (type: 'foo' | 'bar') => {
  if(type === 'bar'){
    return 'bar'
  } else {
    ''
  }
}