interface Info {
  name: string
  [key: string]: string
}

const info: Info = {
  name: 'age'
}

// noPropertyAccessFromIndexSignature 必须使用 ['sex'] 来访问索引签名
console.log(info.sex);
