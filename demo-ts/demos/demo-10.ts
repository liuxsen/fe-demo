export class demo10 {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  greet(){
    return function () {
      // noImplicitThis ,this具有any类型
      return this.name;
    }
  }
}