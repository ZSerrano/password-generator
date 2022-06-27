# Module 3 Refactor Challenge

## Deployed Link
https://zserrano.github.io/password-generator/


## Screenshot of Deployed Website
![03-javascript-homework-demo](https://user-images.githubusercontent.com/65681875/175863579-be3e4248-1d38-4e89-b8b9-6ef47d51c2d0.png)



## Description
Refactored the source code to generate a randomized password utilizing criteria specified by the user and of a length input by the user.


## Additions/Alterations
- Added arrays containing all potential characters in password
- Added empty arrays for validation methods and a counter set to 0
- Created a function called generatePassword to run through multiple statements and a validation function that would return a randomized password of specific criteria and length at the end
- Created an initial prompt for the user's length input and an if else if statement to validate the length input and ensure it's an integer between 8-128 characters long
- Created multiple confirm functions to set remaining criteria for password
- Created a validatePass function to ensure that the password consists of set criteria and contains at least one character from each specific element of criteria
- Created a for loop to randomize password and set up lines of code afterwards to join the password array together into a string with no separators that can then be returned

## Contributors
- Andrew E: https://github.com/Andrew87E
- Kurt B: https://github.com/kurtbixby
