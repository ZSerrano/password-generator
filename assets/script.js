// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// arrays containing all potential characters
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?'];
// empty arrays for validation methods and counter set to 0
var passChar = [];
var everyChar = [];
var counter = 0;

function generatePassword() {
    

		let pwdLength = prompt("Enter the number of characters you would like your password to be.", "Password must be between 8-128 characters.");
		// checks that number is an integer and not a float
    if (!Number.isInteger(Number(pwdLength))) {
      window.alert(pwdLength + " is not a valid input.  Please enter a number between 8-128.");
      return generatePassword(); 
      // if entry is an integer in proper length then first message will display, 
      // otherwise second will display asking for new input
    } else if (pwdLength >= 8 && pwdLength <= 128) {
      confirm("Your password will be " + pwdLength + " characters long.");
    } else {
      confirm("Please enter a number between 8-128.");
      return generatePassword();
    };
    // console.log("Z");
    // Messages to confirm password criteria
    let yesUpper = confirm("Do you want uppercase letters in your password? Hit 'Ok' for yes or 'Cancel' for no.");
    let yesLower = confirm("Do you want lowercase letters in your password? Hit 'Ok' for yes or 'Cancel' for no.");
    let yesNumbers = confirm("Do you want to use numbers in your password? Hit 'Ok' for yes or 'Cancel' for no.");
    let yesSpecial = confirm("Do you want special characters in your password? These can include items as such as an exclamation point, question mark, etc. Hit 'Ok' for yes or 'Cancel' for no.");
    
    // If true, each if statement will add specific characters into passChar array,
    // will add one random character of those specific characters into the everyChar
    // array, and will increase the counter variable by 1.
    function validatePass() {
      if (yesUpper === true) {
        // console.log("Yes uppercase");
        passChar = passChar.concat(upper);
        everyChar.push(upper[Math.floor(Math.random()*upper.length)]);
        counter++
      }
  
      if (yesLower === true) {
        // console.log("Yes lowercase");
        passChar = passChar.concat(lower);
        everyChar.push(lower[Math.floor(Math.random()*lower.length)]);
        counter++
      }
      if (yesNumbers === true) {
        // console.log("yes Numbers");
        passChar = passChar.concat(numbers);
        everyChar.push(numbers[Math.floor(Math.random()*numbers.length)]);
        counter++
      }
      if (yesSpecial === true) {
        // console.log("yes special");
        passChar = passChar.concat(special);
        everyChar.push(special[Math.floor(Math.random()*special.length)]);
        counter++
      }
      // console.log(passChar);
      return passChar;
    };
    
   
    // calls the validatePass function
    validatePass();
    // newPass variable is assigned to an empty array
    var newPass = [];
    // for loop pulls a random character from passChar array and appends it to the end
    // of the newPass array. for loop will iterate a number of times equal to user input length
    // minus the counter value.
    for (var i = 0; i < pwdLength - counter; i++) {
      newPass.push(passChar[Math.floor(Math.random()*passChar.length)]);
    };
    // this line joins all of the elements of the newPass array together without any separators
    // and then appends it to the end of the everyChar array
    everyChar.push(newPass.join(''));
    // creates a shadow of password var that is reassigned in this function to let of the same
    // name and has been assigned the everyChar array joined without any separators
    let password = everyChar.join('');
    // console.log('check');

// returns password and ends function
return password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
