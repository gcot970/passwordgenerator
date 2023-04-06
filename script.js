// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

function generatePassword() {

// String to hold how long the password is.
  var lengthOption


// Arrays for the password generator to select
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "@#%&!";

// Array to host all of the selected criteria
  var passwordChars = [];

// Final, randomized password that gets returned
  var finalPassword = "";

// Prompting the user about the length
  lengthOption = prompt("How many long should the password be? (Must be between 8-128)");
  console.log("The length of password is: " + lengthOption);

// Error-checking/Making sure that the password is a number and is between 8 and 128
  if (lengthOption < 8) {
    lengthOption = 8;
    console.log("Changed length to minimum: " + lengthOption);
  } else if (lengthOption > 128) {
    lengthOption = 128;
    console.log("Changed length to maximum: " + lengthOption);
  } else if (isNaN(lengthOption)) {
    lengthOption = 8;
    console.log("Changed NaN to minimum: " + lengthOption);
  }


// Criteria selection
// Everytime a confirmation is selected OK, all the characters in that
// array is added to passwordChars array. Spread used to merge each.
  if(confirm("Would you like to include lowercase characters?") === true) {
    console.log("Lowercase chosen");
    passwordChars.push(...lowercaseChars);
  } else {
    console.log("Lowercase not chosen");
  }

  if(confirm("Would you like to include uppercase characters?") === true) {  
    console.log("Uppercase chosen");
    passwordChars.push(...uppercaseChars);
  } else {
    console.log("Uppercase not chosen");
  }

  if(confirm("Would you like to include numeric characters?") === true) {
    console.log("Numeric chosen");
    passwordChars.push(...numberChars);
  } else {
    console.log("Numeric not chosen");
  }

  if(confirm("Would you like to include special characters?\n (@,#,%,&,!)") === true) {
    console.log("Special char chosen");
    passwordChars.push(...specialChars);
  } else {
    console.log("Special not chosen");
  }

  
// for loop that adds a random character from passwordChars array
// and concatenates into the finalPassword string.
  for (var i = 0; i < lengthOption; i++) {
    var randomChar = passwordChars[Math.floor(Math.random() * passwordChars.length)];
    finalPassword += randomChar;
  }

// returns the new, final password!
  return finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
