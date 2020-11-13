export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercCalc() {
    let mercAge = (this.age / .24);
    return mercAge;
  }
};