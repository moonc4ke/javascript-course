// Math

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
//x = Math.PI;

console.log(x);

// useful string properties & methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);

// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


// method chaining = calling one method after another
//                   in one continuous line of code

let myName = "bro";

let letter = myName.charAt(0).toUpperCase().trim();

console.log(letter);

// if statement = a basic form of decision making
//                           if a condition is true, then do something
//                           if not, then don't do it!

let age = 21;

if(age >= 65){
    console.log("You are a senior citizen!");
}
else if(age >= 18){
    console.log("You are an adult!");
}
else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else{
    console.log("You are a child!");
}

/*
let online = false;

if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline!");
}
*/

let grade = "A";

switch(grade){
 
    case "A":
      console.log("You did great!");
      break;
   
    case "B":
      console.log("You did good!");
      break;
 
    case "C":
      console.log("You did okay!");
      break;
 
    case "D":
      console.log("You passed ... barely");
      break;
 
    case "F":
      console.log("YOU FAILED!");
      break;
 
    default:
      console.log(grade, "is not a letter grade");
}