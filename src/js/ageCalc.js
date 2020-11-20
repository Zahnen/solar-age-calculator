export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  mercCalc() {
    let mercAge = Math.floor(this.age / .24);
    return mercAge;
  }
  venusCalc() {
    let venusAge = Math.floor(this.age / .62);
    return venusAge;
  }
  marsCalc() {
    let marsAge = Math.floor(this.age / 1.88);
    return marsAge;
  }
  jupCalc() {
    let jupAge = Math.floor(this.age / 11.86);
    return jupAge;
  }
  expectCalc() {
    let expAge = Math.floor(72.2 - this.age);
    if (expAge < 0) {
      return (expAge * -1);
    } else {
      return expAge;
    }
  }
  mercExpCalc() {
    let expAge = Math.floor(72.2 - this.age);
    let mercExpAge = Math.floor(expAge / .24);
    return mercExpAge;
  }
  venusExpCalc() {
    let expAge = Math.floor(72.2 - this.age);
    let venusExpAge = Math.floor(expAge / .62);
    return venusExpAge;
  }
  marsExpCalc() {
    let expAge = Math.floor(72.2 - this.age);
    let marsExpAge = Math.floor(expAge / 1.88);
    return marsExpAge;
  }
  jupExpCalc() {
    let expAge = Math.floor(72.2 - this.age);
    let jupExpAge = Math.floor(expAge / 11.86);
    return jupExpAge;
  }
}