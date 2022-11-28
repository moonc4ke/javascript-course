/* 
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
let extraStudents = students % 2;
students = students ** 2;

console.log(students);

students += 1;
students -= 1;
students *= 2;
students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = (1 + 2) * (3 + 4);

console.log(result);

// ######################

// How to accept user input

// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

let username;

document.getElementById('myButton').onclick = function () {
  username = document.getElementById('myText').value;
  console.log(username);
  document.getElementById('myLabel').innerHTML = 'Hello ' + username;
};
