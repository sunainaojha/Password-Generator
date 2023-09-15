
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);






function getPasswordCriteria() {
  
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

 
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid length. Please enter a valid length (between 8 and 128 characters):"));
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  return {
    length: passwordLength,
    lowercase: includeLowercase,
    uppercase: includeUppercase,
    numeric: includeNumeric,
    special: includeSpecial
  };
}


function generatePassword() {
  var criteria = getPasswordCriteria();
  var characters = "";
  var password = "";


  if (criteria.lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (criteria.uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (criteria.numeric) {
    characters += "0123456789";
  }
  if (criteria.special) {
    characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  }


  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}




