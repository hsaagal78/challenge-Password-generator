var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

var amount = +prompt('Please enter the length of the password between 8 to 128 characters');


while (amount < 8 || amount > 128) {
  alert('Please enter the correct password length');
  amount = +prompt('Please enter the length of the password between 8 to 128 characters');

  
}
function getUserInput() {
// var amount = +prompt('Please enter the length of the password between 8 to 128 characters');
var amount2= amount;
var inclueLowercase = confirm('Click OK to include lowercase letter?'); 
var inclueUppercase = confirm('Click OK to include Uppercase letter?'); 
var incluenumber = confirm('Click OK to include number?'); 
var incluespecialCharecters = confirm('Click OK to include special characters?'); 
console.log(amount2, inclueLowercase, inclueUppercase,incluenumber, incluespecialCharecters );
    return [amount2, inclueLowercase, inclueUppercase,incluenumber, incluespecialCharecters ];
}
var choices = getUserInput();
function generatedpass(){
    var combinechars = [];
    var Password ='';
    var inclueLowercase= choices[1];
    var inclueUppercase=choices[2];
    var incluenumber=choices[3];
    var incluespecialCharecters=choices[4];


  if (inclueLowercase) {
    combinechars=combinechars.concat(lowercase);
  }

  if (inclueUppercase) {
    combinechars=combinechars.concat(uppercase);
  }

  if (incluenumber) {
    combinechars=combinechars.concat(numbers);
  }

  if (incluespecialCharecters) {
   combinechars=combinechars.concat(specialCharacters);
  }


  for (var index = 0; index < choices[0]; index++) {
    var randomNumber = Math.floor(Math.random() * combinechars.length);
    Password += combinechars[randomNumber];
   
  }
  return Password;
}
var pass = generatedpass();
console.log(pass);
// document.body.innerText = pass;

