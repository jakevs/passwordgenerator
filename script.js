/*
PseudoCode
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

  Create variables for prompts.
  If else statements?
  Loops?
  Make something happen after confirm is answered - generate random letter, number or not
  Make value equal amount of characters selected by user
  // var intro = confirm("Do you want to create a random, secure password?");
// var num = confirm("Do you want use numbers?");
// var upper = confirm("Do you want to use upper case letters?");
// var lower = confirm("Do you want to use lower case letters?");
// var special = confirm("Do you want to use special characters?");
// var total = prompt("How many total characters do you want to use? Minimum number 6 Maximum 18");
  //   numCh = Math.floor((Math.random() * 10));
  //   console.log(numCh);
  // } else {
  //   console.log(false);
  // }

  // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); {
// }
*/

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCh = "abcdefghijklmnopqrstuvwxyz";
var upperCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCh = "0123456789";
var specialCh = "!@#$%^&*()[]{}?";

document.getElementById("generate").onclick = function (event) {
  var characterArray = "";
  var guaranteedCharacters = [];

  var response = confirm("Do you want to create a random, secure password?");
  if (response === true) {
    alert("A fine choice!");
  } else {
    alert("Catch you on the flip side!");
    return;
  }

  var response = confirm(
    "Do you want generator to select from random numbers?"
  );
  if (response === true) {
    characterArray += numCh;
  }

  var response = confirm(
    "Do you want generator to select from random upper case letters?"
  );
  if (response === true) {
    characterArray += upperCh;
  }

  var response = confirm(
    "Do you want generator to select from random lower case letters?"
  );
  if (response === true) {
    characterArray += lowerCh;
  }

  var response = confirm(
    "Do you want generator to select from special characters?"
  );
  if (response === true) {
    characterArray += specialCh;
  }

  var response = prompt("How many total characters do you want to use?");
  if (characterArray === "") {
    return;
  }
  var generatedPwd = "";
  for (i = 0; i < response; i++) {
    var number = Math.floor(Math.random() * characterArray.length);
    generatedPwd += characterArray[number];
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  console.log(generatedPwd);

  document.getElementById("password").innerHTML = generatedPwd;
};
