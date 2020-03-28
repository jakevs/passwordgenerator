/*
Will need prompt and confirms when generate button is selected
  - Would you like to create a secure password? confirm
  - How many total characters would you like in the password? (between 6-18) prompt
  - Would you like to use numbers? confirm
  - Would you like to use upperCase letters? confirm
  - Would you like to use lowerCase letters? confirm
  - Would you like to use special characters? confirm
  - At least one of each character selected should be returned.
  - After all prompts are answered, should return an alert or on the blank in the content box. alert?
  ** Or could have a prompt that gives selections of characters to choose from. prompt

  Create variable for prompts.
  If else statements?
  Loops?
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCh = "abcdefghijklmnopqrstuvwxyz";
var upperCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCh = "0123456789";
var specialCh = "!@#$%^&*()[]{}?";
var intro = confirm("Do you want to create a random, secure password?");
var num = confirm("Do you want use numbers?");
var upper = confirm("Do you want to use upper case letters?");
var lower = confirm("Do you want to use lower case letters?");
var special = confirm("Do you want to use special characters?");
var total = prompt("How many total characters do you want to use? Minimum number 6 Maximum 18");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  var upper = confirm("Do you want to use upper case letters?")

}
