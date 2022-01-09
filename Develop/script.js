// Get references to the #generate and #password element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Character variables 
  const lowercase = ["Lowercase ", "abcdefghijklmnopqrstuvwxyz"];
  const uppercase = ["Uppercase ", "ABCDEFGHIJKLMNOPQURTUVWXYZ"];
  const numeric = ["Numerics ", "0123456789"];
  const special = ["Special Characters ", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
  var totalCharacters = []
  var passList = []
  var password = []

/* First --- after button is clicked I need to generate prompts
character types: uppecase, lowercase, numeric, and special characters
password length: between 8-128 characters. */
 
// Prompt variables
var confLower = window.confirm("Would you like to include lowercase characters?");
var confUpper = window.confirm("would you like to include UPPERCASE characters?");
var confNumbers = window.confirm("Would you like to include numbers (0-9)?");
var confSpecial = window.confirm("Would you like to use special characters? (&, *, $, etc)?");
var characterLength = window.prompt("How long would you like the password to be? Enter a number between 8 and 128.");
var promptList = [confLower, confUpper, confNumbers, confSpecial,]
var userChoices = []
  
/* Confirm Prompts Function 
    This adds characters to the passList array if the user confirms the choice 
*/ 
var confirmPrompts = () => {  
  if(confLower) {
    passList += (lowercase[1]);
    userChoices += (lowercase[0]);
  };
  if(confUpper) {
    passList += (uppercase[1]);
    userChoices += (uppercase[0]);
  };
  if(confNumbers) {
    passList += (numeric[1]);
    userChoices += (numeric[0]);
  };
  if(confSpecial) {
    passList += (special[1]);
    userChoices += (special[0]);
  };
};
/* Password Length Prompt
    This will return the users desired length, between 8 and 128 characters */
var passwordLength = () => {
  if(characterLength > 128 || characterLength < 8) {
    window.alert("Invalid option, please enter a number between 8 and 128");
  } else if (!characterLength) {
    window.alert("Invalid option, please enter a number between 8 and 128");
  };
  totalCharacters += characterLength;
  console.log(totalCharacters); 
};

/*Generate Password Function:
    This Generates a random password. 
    It will loop through our prompt list adding user selections to arrays
    Then it allows the user to determine the required length
    Finally it generates a new array with random characters selected from the passList. 
*/

var generatePassword = () => {
  var i = 0
  while (i < promptList.length) {
    confirmPrompts();
    i++;
    console.log(passList);
    break;
  } 
  passwordLength();
  //This will let the user view and confirm their choices.
  passwordText.textContent = `Your password will be ${totalCharacters} characters long and include:\n${userChoices} \n\n Click Generate Password below to generate your Unique Password`;
/* Generate Random Password:
    This will Randomly select characters from the passList 
    and add them to the password array.
*/
  for(let i = 0; i < parseInt(totalCharacters); i++) {
    password += passList[Math.floor(Math.random() * passList.length)];
  };  
}

//This changes the textbox content to the password. 
var writePassword = () => {
  passwordText.textContent = password;
}

//This calls the generate password function then writes it in the password textbox when the button is clicked. 
generatePassword();
generateBtn.addEventListener("click", writePassword)




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
// generateBtn.addEventListener("click", writePassword);



