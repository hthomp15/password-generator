// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Character variables 
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQURTUVWXYZ";
  var numeric = "0123456789";
  var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var totalCharacters = []
  var passList = []
// Prompt variables
  
/* First --- after button is clicked I need to generate prompts
character types: uppecase, lowercase, numeric, and special characters
password length: between 8-128 characters. */

// Confirm Prompts function 
var confLower = window.confirm("Would you like to include lowercase characters?");
var confUpper = window.confirm("would you like to include UPPERCASE characters?");
var confNumbers = window.confirm("Would you like to include numbers (0-9)?");
var confSpecial = window.confirm("Would you like to use special characters? (&, *, $, etc)?");
var characterLength = window.prompt("How long would you like the password to be? Enter a number between 8 and 128.");
var promptList = [confLower, confUpper, confNumbers, confSpecial,]
  

//Confirm Prompts
var confirmPrompts = () => {
  
  if(confLower) {
    passList += lowercase;
    console.log(passList);
  };
  if(confUpper) {
    passList += uppercase;
    console.log(passList);
  };
  if(confNumbers) {
    passList += numeric;
    console.log(passList);
  };
  if(confSpecial) {
    passList += special;
    console.log(passList);
  };
  
}

var passwordLength = () => {
  if(characterLength > 128 && characterLength < 8) {
    window.alert("Invalid option, please enter a number between 8 and 128");
    characterLength;
  } else if (!characterLength) {
    window.alert("Invalid option, please enter a number between 8 and 128");
    characterLength;
  }
  totalCharacters += characterLength;
  console.log(totalCharacters)
  
}

var generateCharacters = () => {
  var i = 0
  while (i < promptList.length) {
    confirmPrompts();
    i++;
    console.log(passList);
    break;
  } 
  passwordLength();
}


generateCharacters()

// // Lowercase Prompt
  
//     if(confLower.toLowerCase() === "yes") {
//       passList += lowercase;
//     } else if (confLower.toLowerCase() !== "yes" || "no") {
//       window.prompt("Invalid option, enter yes or no");
//     }

// // // Uppercase Prompt
  
//     if(confUpper.toLowerCase() === "yes") {
//       passList += uppercase;
//     } else if (confUpper.toLowerCase() !== "yes" || "no") {
//       window.prompt("Invalid option, enter yes or no");
//     }

// // // Numeric Prompt 
  
//     if(confNumbers.toLowerCase() === "yes") {
//       passList += numeric;
//     } else if (confNumbers.toLowerCase() !== "yes" || "no") {
//       window.prompt("Invalid option, enter yes or no");
//     }
// // // Special Characters  
  
//     if(confSpecial.toLowerCase() === "yes") {
//       passList += special;
//     } else if (confSpecial.toLowerCase() !== "yes" || "no") {
//       window.prompt("Invalid option, enter yes or no");
//     }

// // // Password Length

//     if(parseInt(passLength) > 128 || parseInt(passLength) < 8) {
//       window.prompt("Invalid option, enter a number between 8-128");
//     } else {
//       return(passLength);
//     }
//     console.log(passLength)
// if(parseInt(characterLength) > 128 || parseInt(characterLength) < 8) {
//   window.prompt("Invalid option, enter a number between 8-128");
// } else {
//   return characterLength;
//   console.log(characterLength)
// }


// }
//   confirmPrompts()
// // password length
  
// //Next --- User secections are stored

// //Next --- User validates choices, at least one must be chosen 


// //Last --- password is displayed in textarea, id "password"


//   passwordText.value = 'password';
//   console.log(passList)
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());



//Old Loop Conditionals 
//   if(promptList[i].toLowerCase() === "yes") {
//   passList += passList[i];
//   if(promptList[i].toLowerCase() !== "yes" || promptList[i].toLowerCase() !== "no") {
//     window.prompt("Invalid option, please enter yes or no.");
//   }
// } else if (i === l) {
//     if (parseInt(passLength) > 128 || parseInt(passLength) < 8) {
//       window.prompt("Invalid option, enter a number between 8-128");
//     } else {
//       return characterLength;
//     }
// }
// console.log(passList);