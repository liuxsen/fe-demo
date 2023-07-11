export type Settings = {
  name: string
  type?: 'foo' | 'bar'
}

const settings: Settings = {
  name: 'aa'
}

//exactOptionalPropertyTypes true 不可以将undefind写到目标类型 =>  "foo" | "bar" | undefined  
settings.type = undefined