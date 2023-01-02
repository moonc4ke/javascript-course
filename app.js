// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temp = 15;
let sunny = false;

if(!(temp > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}

// #########################################

// while loop = repeat some code 
//                       while some condition is true
//                       potentially infinite

// let userName = "";

// while(userName == "" || userName == null){
//     userName = window.prompt("Enter your name");
// }

// console.log("Hello", userName);

// #########################################

// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

// let userName2;

// do{
//   userName2 = window.prompt("Enter your name");
// }while(userName2 == "")

// console.log("Hello", userName2);

// #########################################

// for loop = repeat some code a 
//            certain amount of times

// for(let i = 1; i <= 10; i+=1){
//     console.log(i);
// }

// for(let i = 10; i > 0; i-=1){
//   console.log(i);
// }

// console.log("HAPPY NEW YEAR!");

// #########################################

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// for(let i = 1; i <= 20; i+=1){
//   if(i == 13){
//       //break;
//       //continue;
//   }
//   console.log(i);
// }

// #########################################

// nested loop = a loop inside of another loop

//  <label id="myRectangle"></label>

// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');

// for(let i = 1; i <= rows; i+=1){
//     for(let j = 1; j <= columns; j+=1){
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }