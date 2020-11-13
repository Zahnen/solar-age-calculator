import { TestScheduler } from 'jest';
import User from '../src/ageCalc.js';

describe('User Age Calculation', () => {

  let user;

  beforeEach(() => {
    user = new User ("Zahnen", 28);
  });

  test('should correctly create a user object with name and age properties', () => {
    expect(user.name).toEqual("Zahnen");
    expect(user.age).toEqual(28);
  });

  test('should convert the users age from earth years to Mercury years and return the result', () => {
    expect(user.mercCalc()).toEqual(116)
  });

  test('should convert the users age from earth years to Venus years and return the result', () => {
    expect(user.venusCalc()).toEqual(45)
  });

  test('should convert the users age from earth years to Mars years and return the result', () => {
    expect(user.marsCalc()).toEqual(14)
  });

  test('should convert the users age from earth years to Jupiter years and return the result', () => {
    expect(user.jupCalc()).toEqual(2)
  });

  test('should determine life expectancy in Earth years by subtracting user age from 72.2 and return the result', () => {
    expect(user.expectCalc()).toEqual(44)
  });

  test('should return number of years lived past life expectancy if user age is greater than 72.2', () => {
    let user2 = new User ("Old Zahnen", 74)
    expect(user2.expectCalc()).toEqual(2)
  });
});



/*
Describe: User Constructor
Test: "Constructor should create a user object with name and age properties"
Expect: (user.name).toEqual("Zahnen")
Expect: (user.age).toEqual(28)

Describe: mercuryCalc
Test: "It should convert the user's age from earth years to Mercury years and return the result"
Expect: ((user.age).mercCalc).toEqual(116.66)

Describe: venusCalc
Test: "It should convert the user's age from earth years to Venus years and return the result"
Expect: ((user.age).venusCalc).toEqual(45.16)

Describe: marsCalc
Test: "It should convert the user's age from earth years to Mars years and return the result"
Expect: ((user.age).marsCalc).toEqual(14.89)

Describe: jupiterCalc
Test: "It should convert the user's age from earth years to Jupiter years and return the result"
Expect: ((user.age).jupiterCalc).toEqual(2.36)

Describe: expectCalc
Test: "It should determine life expectancy by subtracting user age from 72.2 and return the result"
Expect: ((user.age).expectCalc).toEqual(44.2)

Test: "It should display negative numbers as positive numbers if user age is greater than life expectancy and return the result"
Expect: ((user.age = 80).expectCalc).toEqual(7.8)
*/