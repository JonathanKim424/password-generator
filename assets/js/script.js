// Assignment code here
var generatePassword = function() {
  // init passwordString to be sent to writePassword() function
  var passwordString = "";
  
  // prompt user for password length; if user selects cancel, the program with close prompt and do nothing
  var passwordLength = passwordLengthPrompt();
  if (passwordLength === null) {
    passwordString = null;
    return passwordString;
  }
  
  // prompt user for desired character sets
  var passwordCharSet = passwordCharPrompt();

  // uses Math.random to select a character from the user selected character set and concatenates the string based on user desired length
  var passwordCharSetLength = passwordCharSet.length;
  for (var i = 0; i < passwordLength; i++) {
    passwordString += passwordCharSet.charAt(Math.floor(Math.random()*passwordCharSetLength));
  }

  return passwordString;
}

// prompts user for desired password length
var passwordLengthPrompt = function() {
  var pLength = window.prompt("Password length? Select 8 - 128.");

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

// prompts user for desired character sets
var passwordCharPrompt = function() {
  // inits character sets
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChar = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  var promptLowerCase = window.confirm("Lower case?");
  var promptUpperCase = window.confirm("Upper case?");
  var promptNumeric = window.confirm("Numbers?");
  var promptSpecialChar = window.confirm("Special characters?");

  // if character set is not desired, returns empty string
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

  // combines updated strings to single password character set
  charSet = lowerCase + upperCase + numeric + specialChar;


  // checks to make sure user has selected at least one character set, ie character set is not empty
  if (charSet === "") {
    window.alert("You must select at least one character set.");
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