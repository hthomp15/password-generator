// Get references to the #generate and #password element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Character variables
const lowercase = ["Lowercase ", "abcdefghijklmnopqrstuvwxyz"];
const uppercase = ["Uppercase ", "ABCDEFGHIJKLMNOPQURTUVWXYZ"];
const numeric = ["Numerics ", "0123456789"];
const special = ["Special Characters ", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

// These are empty arrays. I will add to these based on the user choices.
var totalCharacters = []
var passList = []
var password = []
var userChoices = []

/* Password Length Prompt
    This will return the users desired length, between 8 and 128 characters */
var passwordLength = () => {
  var characterLength = window.prompt("How long would you like the password to be? Enter a number between 8 and 128.");
//if the length isn't between 8 and 128 It will alert and loop through the prompt again. 
  if(characterLength >= 8 && characterLength <= 128) {
    totalCharacters += characterLength;
  } else {
    window.alert("Invalid option, please enter a number between 8 and 128");
    console.log(totalCharacters)
    passwordLength()
    return;
  };  
};

/* Confirm Prompts Function 
    This adds characters to the passList array if the user confirms the choice */ 

var confirmPrompts = () => {  
//List of window Prompts to confirm.
  var confLower = window.confirm("Would you like to include lowercase characters?");
  var confUpper = window.confirm("would you like to include UPPERCASE characters?");
  var confNumbers = window.confirm("Would you like to include numbers (0-9)?");
  var confSpecial = window.confirm("Would you like to use special characters? (&, *, $, etc)?");

/* If the user confirms (true) the Character Variables will be split and 
    added to new arrays. */
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

//Alerts the user they need to choose at least one character type, and reloads the page.
var checkPrompts = () => {
  if(passList.length < 1) {
    window.alert("You must select at least one of the character options.");
    location.reload();
  };
};

//This reloads the page. Will be used with a timeout. 
var timeInterval = ()=> {
  location.reload();
}

/*Generate Password Function:
    This Generates a random password. 
    After the password is generated it will display on the screen
    After 10 seconds the page will refresh */
var generatePassword = () => {
  passwordLength();
  confirmPrompts();
  checkPrompts();
  //This will let the user view and confirm their choices.
  alert(`Your password will be ${totalCharacters} characters long and include:\n${userChoices}`);
/* Generate Random Password:
    This will Randomly select characters from the passList 
    and add them to the password array.*/
  for(let i = 0; i < parseInt(totalCharacters); i++) {
    password += passList[Math.floor(Math.random() * passList.length)];
  };  
  passwordText.textContent = `${password} \n\n The page will refresh in 5 seconds`;
//This will run my timeInteval after 5 seconds (refreshing the page).
  setTimeout(timeInterval, 5000)
};

/* Generate password button
    When clicked it will run the generatePassword function. */
generateBtn.addEventListener("click",generatePassword);