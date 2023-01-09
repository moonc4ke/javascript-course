// let sunny = false;

// if (!!sunny) {
//   console.log('Cloudy outside');
// } else {
//   console.log('Sunny outside');
// }

// let userName = '';

// while(userName === '' || userName === null) {
//   userName = window.prompt('Enter your name');
// }

// console.log('Hi ' + userName);

// let userName;

// do {
//   userName = window.prompt('Enter your name');
// } while (userName === '' || userName === null);

// console.log('Hi ' + userName);

// while (true) {
//   console.log('Hi!');
// }

// for (let i = 1; i <= 10; i+=1) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i-= 1){
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

let symbol = window.prompt('Enter a symbol to use');
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

const rectangle = document.querySelector('#myRectangle');

for (let index = 0; index < rows; index++) {
  for (let index = 0; index < columns; index++) {
    rectangle.innerHTML += symbol;
  }
  rectangle.innerHTML += '<br>';
}
