var Lower_Case = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Upper_case = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Special_Characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

var Length_Password = +prompt('Please enter the length of the password between 8 to 128 characters');
//the while loop help to alert message if the length is not within the specified range. 

while (Length_Password < 8 || Length_Password > 128) {
  alert('Please enter the correct password length');
  Length_Password = +prompt('Please enter the length of the password between 8 to 128 characters');
}

function Array_user_options() {
//asked for character types to include in the password
// program presents a series of confirmation prompts to the user, asking whether they want to include lowercase letters, uppercase letters,umbers, and special characters in the password 
var User_confirm_PasswordLength= Length_Password;
var User_confirm_LowerCase = confirm('Click OK to include lowercase letters?'); 
var User_confirm_Uppercase = confirm('Click OK to include Uppercase letters?'); 
var User_confirm_Numbers = confirm('Click OK to include number?'); 
var User_confirm_SpecialCharecters = confirm('Click OK to include special characters?'); 
//confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//  and user's selections are stored in an array called total_array.

    return [User_confirm_PasswordLength, User_confirm_LowerCase, User_confirm_Uppercase,User_confirm_Numbers, User_confirm_SpecialCharecters ];
}
var total_array = Array_user_options();
  
function Password_Process(){//this funtion processes the user's choices and generates a password that matches the selected criteria.
    var Total_array_data = [];
    var Generate_Passaword ='';
    
    var List_Confirm_User_LowerCase= total_array[1];
    var List_Confirm_User_UpperCase=total_array[2];
    var List_Confirm_User_Numbers=total_array[3];
    var List_Confirm_User_SpecialC=total_array[4];

   // concatenates the character arrays (such as lowercase letters, uppercase letters, numbers, and special characters) based on the user's selections 
  if (List_Confirm_User_LowerCase) {
    Total_array_data=Total_array_data.concat(Lower_Case);
  }

  if (List_Confirm_User_UpperCase) {
    Total_array_data=Total_array_data.concat(Upper_case);
  }

  if (List_Confirm_User_Numbers) {
    Total_array_data=Total_array_data.concat(numbers);
  }

  if (List_Confirm_User_SpecialC) {
   Total_array_data=Total_array_data.concat(Special_Characters);
  }
//password is generated that matches the selected criteria
// loop, it randomly selects characters from the concatenated array and builds the final password string.
  for (var Length = 0; Length < total_array[0]; Length++) {
    var Random_possition = Math.floor(Math.random() * Total_array_data.length);
    Generate_Passaword += Total_array_data[Random_possition];
   
  }
  return Generate_Passaword;
}

var password = Password_Process();
console.log(password);
//password is displayed to the page
document.getElementById("password").innerHTML = password;

