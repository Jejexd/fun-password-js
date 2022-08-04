// Assignment code here"
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var symbol = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  "~",
];
var length = 128;
var variaty = [];
// Get references to the #generate element
function generatePassword() {}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  charather = window.prompt("How many characters would you like?");

  var generateBtn = document.querySelector("#generate");
  lowercaseAll = window.prompt("Would you like to add a lower case letter?");
  uppercaseAll = window.prompt("Would you like to add a upper case letter? ");
  numbersAll = window.prompt("Would you like to add a number case?");
  symbolAll = window.prompt("Would you like to add a symbol?");
  if (lowercaseAll === true) {
    variaty = variaty.concat(lowercase);
  }
  if (uppercaseAll === true) {
    variaty = variaty.concat(uppercase);
  }
  if (symbolAll === true) {
    variaty = variaty.concat(symbol);
  }
  if (numbersAll === true) {
    variaty = variaty.concat(numbers);
  }
  var password = generatePassword();

  var password = "";
  for (var i = 0; i < length; i++) {
    password += variaty[Math.floor(Math.random() * variaty.length)];
  }
  passwordText.value = password;
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
