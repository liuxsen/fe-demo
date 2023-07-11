interface Info {
  name: string
  [key: string]: string
}


const info: Info = {
  name: 'age'
}

// sex: string|undefind
export const sex = info['sex']