// Assignment code here
var generatePassword = function() {
  // init passwordString to be sent to writePassword() function
  var passwordString = "";
  
  // prompt user for password length; if user selects cancel, the program will close prompt and do nothing
  var passwordLength = passwordLengthPrompt();
  if (passwordLength === null) {
    passwordString = null;
    return passwordString;
  }
  
  // prompt user for desired character types
  var passwordCharSet = passwordCharPrompt();

  // uses Math.random to select a character from the user selected character types and concatenates password string based on user desired length
  var passwordCharSetLength = passwordCharSet.length;
  for (var i = 0; i < passwordLength; i++) {
    passwordString += passwordCharSet.charAt(Math.floor(Math.random()*passwordCharSetLength));
  }

  return passwordString;
}

// prompts user for desired password length
var passwordLengthPrompt = function() {
  var pLength = window.prompt("Desired password length?\nPlease select from 8 - 128.");

  // if cancel, do nothing
  if (pLength === null) {
    return pLength;
  }

  // converts prompt to integer and determines if it is a valid input, if not loops prompt
  pLength = parseInt(pLength);
  if (pLength < 8 || pLength > 128 || isNaN(pLength)) {
    window.alert("Please provide a valid number.");
    return passwordLengthPrompt();
  }

  return pLength;
}

// prompts user for desired character types
var passwordCharPrompt = function() {
  // inits character types
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChar = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  var promptLowerCase = window.confirm("Which character types should be used?\nInclude lower case?");
  var promptUpperCase = window.confirm("Include upper case?");
  var promptNumeric = window.confirm("Include numbers?");
  var promptSpecialChar = window.confirm("Include special characters?");

  // if character type is not desired, sets empty string for designated character type
  if (!promptLowerCase) {
    lowerCase = "";
  }
  if (!promptUpperCase) {
    upperCase = "";
  }
  if (!promptNumeric) {
    numeric = "";
  }
  if (!promptSpecialChar) {
    specialChar = "";
  }

  // combines character type strings to single password character set
  charSet = lowerCase + upperCase + numeric + specialChar;


  // checks to make sure user has selected at least one character type, ie character set is not empty
  if (charSet === "") {
    window.alert("You must select at least one character type.");
    return passwordCharPrompt();
  }

  return charSet;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // if user selects cancel on first prompt, nothing will be done
  if (password === null) {
    return;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);