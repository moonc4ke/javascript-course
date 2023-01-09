//function = Define code once, and use it many times.
//                   To perform some code, call the function name.

// startProgram();

// function startProgram() {
//   let userName = 'Bro';
//   let age = 21;

//   happyBirthday(userName, age);
// }

// function happyBirthday(userName, age) {
//   console.log('Happy birthday to you!');
//   console.log('Happy birthday to you!');
//   console.log('Happy birthday dear', userName);
//   console.log('Happy birthday to you!');
//   console.log('You are', age, 'years old!');
// }

// #########################################

// return = returns a value back to the place
//               where you invoked a function

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:", area);

// function getArea(width, height){
//     return width * height;
// }

// #########################################

// ternary operator = Shortcut for an 'if/else statement'
//                                  Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False

// condition ? exprIfTrue : exprIfFalse

// let adult = checkAge(12);
// console.log(adult);

// function checkAge(age){

//     return age >= 18? true : false;
// }
// /*
// checkWinner(false);

// function checkWinner(win){

//     win ? console.log("You win!") : console.log("You lose!");
// }
// */

// #########################################

// Template literals = delimited with (`)
//                                   instead of double or single quotes
//                                   allows embedded variables and expressions

// let userName = "Bro";
// let items = 3;
// let total = 75;

//console.log("Hello", userName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);

// #########################################

// array = think of it as a variable,
//             that can store multiple values

// let fruits = ["apple", "orange", "banana"];

// //fruits[2] = "coconut";

// //fruits.push("lemon");   //add an element
// //fruits.pop();           //removes last element
// //fruits.unshift("mango");//add element to beginning
// //fruits.shift();         //removes element from beginning

// //let length = fruits.length;
// //let index = fruits.indexOf("kiwi");

// console.log(fruits);

// #########################################

// Loop through the elements of an array

// let prices = [5, 10, 15, 20, 25];

// /*
// for(let i = 0; i < prices.length; i+=1){
//     console.log(prices[i]);
// }
// */

// for(let price of prices){
//     console.log(price);
// }

// #########################################
// sort an array of strings

// let fruits = ['banana', 'apple', 'orange', 'mango'];

// fruits = fruits.sort();
// //fruits = fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// #########################################
//2D arrays

// let fruits = ['apples', 'oranges', 'bananas'];
// let vegetables = ['carrots', 'onions', 'potatoes'];
// let meats = ['eggs', 'chicken', 'fish'];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][2] = 'steak';

// for (let list of groceryList) {
//   for (let food of list) {
//     console.log(food);
//   }
// }

// #########################################

// spread operator = allows an iterable such as an
// ...                             array or string to be expanded
//                                 in places where zero or more
//                                 arguments are expected
//                                (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(...numbers);
// console.log(maximum);

/*
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);
*/

// #########################################

// rest parameters = represents an indefinite number
// ...                             of parameters
//                                (packs arguments into an array)

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// function sum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }
