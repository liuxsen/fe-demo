class Animal {
  run(){}
  eat(){
    console.log("eat");
  }
}

class Bird extends Animal {
  // noImplicitOverride 必须要有overide
  run(): void {
    console.log("run");
    
  }
  sound(){
    console.log("sound");
  }
}

class Miao extends Animal {
  override eat(): void {
    
  }
}