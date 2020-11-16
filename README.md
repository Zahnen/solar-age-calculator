# _Solar Age Calculator_

#### _A webpage to calculate your solar age on other planets, November 13, 2020_

#### By _**Zahnen Garner**_

## Description

_This webpage was created as my independent project for my fifth week at Epicodus. The webpage allows users to input their age in years on Earth and view their age/number of solar returns on other planets. The webpage was created to apply concepts I learned this week which include updated project structures, NPM, and Test Driven Development._

## Setup/Installation Requirements

### If you would like to run the webpage on GitHub Pages
* _[Click Here](https://zahnen.github.io/solar-age/dist/index.html)_

### If you would like to run the webpage locally

* _Open your git-capable command line program (I recommend Terminal on Mac or Git Bash on PC)_
* _Ensure you are within the directory you'd like the file to be created in._
* _Enter the command "$ git clone https://github.com/Zahnen/solar-age-calculator" in your command line_
* _Once cloned, use the "$ cd " command to navigate to the directory created in the previous step._
* _You must have node.js installed in order to run the webpage successfully. If you do not have node.js installed, find more information and download it [here](https://nodejs.org/en/download/)_
* _Once in the newly cloned directory, run "$ npm install" in your command line to install the necessary packages and dependencies._
* _To open the webpage in your default browser, run "$ npm start"._

## Specs

_The following specs were tested with Jest during the development of this webpage. For the purposes of testing, a user named "Zahnen" with an age of 28 was used for each test unless otherwise noted._

<details>
<summary>Click to view test specs.</summary>
  
Describe: User Class

Test: It should correctly create a user object with name and age properties.  
Expect: (user.name).toEqual("Zahnen")  
Expect: (user.age).toEqual(28)  

Test: It s hould convert the users age from earth years to Mercury years and return the result.  
Expect: (user.mercCalc()).toEqual(116)  

Test: It should convert the users age from earth years to Venus years and return the result.  
Expect: (user.venusCalc()).toEqual(45)  

Test: It should convert the users age from earth years to Mars years and return the result.  
Expect: (user.marsCalc()).toEqual(14)  

Test: It should convert the users age from earth years to Jupiter years and return the result.  
Expect: (user.jupCalc()).toEqual(2)  

Test: It should determine life expectancy in Earth years by subtracting user age from 72.2 and return the result.  
Expect: (user.expectCalc()).toEqual(44)  

Test: It should return number of years lived past life expectancy if user age is greater than 72.2.  
let user2 = new User ("Old Zahnen", 74)  
Expect: (user2.expectCalc()).toEqual(2)  

Test: It should determine life expectancy on Mercury and return the result.  
Expect: (user.mercExpCalc()).toEqual(183)  

Test: It should determine life expectancy on Venus and return the result.  
Expect: (user.venusExpCalc()).toEqual(70)  

Test: It should determine life expectancy on Mars and return the result.  
Expect: (user.marsExpCalc()).toEqual(23)  

Test: It should determine life expectancy on Jupiter and return the result.  
Expect: (user.jupExpCalc()).toEqual(3)  
</details>

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you notice a bug or require support, please reach out to me via email. I can be reached at zahnen@gmail.com_

## Technologies Used

_This webpage required use of the following programs/languages/libraries to create:_
* _GitBash_
* _Visual Studio Code_
* _GitHub_
* _GitHub Pages_
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_
* _Node.js_
* _npm_
* _Jest_
* _For a full list of packages/dependencies, feel free to have a look in the file titled package.json_

### License

*Licensed under MIT*

*Vector icons provided via Icons8's library, which can be found at https://icons8.com/*


Copyright (c) 2020 **_Zahnen Garner_**