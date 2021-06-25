// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){



  var numbers = "0123456789";
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var alphaCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var punctuation = "!@%+?#$%^&*~";
  var passwordLength = prompt ("how many characters do you want on your password?")
  var numbersPicked = confirm ("do you want numbers added in your password?")

  var password = "";
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  console.log(passwordLength);
  console.log(numbersPicked);


  for (var i=0; i<passwordLength; i++) {
   
 
  var pick = Math.floor(Math.random() * 4);
//do i add sqr brakts on 24?
  if (pick ==0) {
    password+= alpha [Math.floor(Math.random() * alpha.length)];
  }
  else if (pick==1) {
    password+= alphaCaps[Math.floor(Math.random() * alphaCaps.length)];
  }
  else if (pick==2) {
    password+= punctuation[Math.floor(Math.random()  * punctuation.length)];
  }
  else {
    password+= numbers[Math.floor(Math.random() * numbers.length)];
  }
  }
console.log(password);
  document.getElementById("password").value = password
}



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
