// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
    let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?'];

    var passChar = [];

		let pwdLength = prompt("Enter the number of characters you would like your password to be.", "Password must be between 8-128 characters.");
		

    if (pwdLength >= 8 && pwdLength <= 128) {
      confirm("Your password will be " + pwdLength + " characters long.");
    } else {
      confirm("Please enter a number between 8-128.");
      return generatePassword();
    };

    let yesUpper = confirm("Do you want uppercase letters in your password? Hit 'Ok' for yes or 'Cancel' for no.");

    let yesLower = confirm("Do you want lowercase letters in your password? Hit 'Ok' for yes or 'Cancel' for no.");
    let yesNumbers = confirm("Do you want to use numbers in your password? Hit 'Ok' for yes or 'Cancel' for no.");
    let yesSpecial = confirm("Do you want special characters in your password? These can include items as such as an exclamation point, question mark, etc. Hit 'Ok' for yes or 'Cancel' for no.");
    
    function validatePass() {
      if (yesUpper === true) {
        passChar.concat(upper);
      };
      if (yesLower === true) {
        passChar.concat(lower);
      };
      if (yesNumbers === true) {
        passChar.concat(numbers);
      };
      if (yesSpecial === true) {
        passChar.concat(special);
      };
      return passChar;
    };
    
    validatePass();
    for (var i = 0; i < pwdLength.length; i++) {
      do {
        var newPass = [];
        newPass.push(passChar[Math.floor(Math.random()*passChar.length)]);
      }
      while (i < pwdLength.length) {

      };
    };
    newPass.toString() = password;

return password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
