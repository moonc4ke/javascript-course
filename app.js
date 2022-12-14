let studentai = 20;

// studentai = studentai + 5;

// console.log(studentai);

// studentai = studentai - 5;

// console.log(studentai);

// studentai = studentai * 5;

// console.log(studentai);

// studentai = studentai / 5;

// console.log(studentai);

// studentai = 21;

// studentai = studentai % 2;

// console.log(studentai);

// // studentai = studentai + 1;
// studentai += 1;

// console.log(studentai);

// studentai %= 1;

// console.log(studentai);

// let cats = (1 + 2) * (3 + 4);

// console.log(cats);

let userusername;

// console.log(userusername);

// userusername = window.prompt("What's your username?");

// console.log(userusername);

document.getElementById('myButton').onclick = function () {
  username = document.getElementById('myText').value;
  username = +username;
  console.log(typeof username);
  username += 5;
  document.getElementById('myP').innerHTML = `After 5 years you will be ${username}`;
};

age = Number("2000");
age = String(20);
let alive;
alive = age;
areYouStillAlive = Boolean(alive);

console.log(typeof areYouStillAlive);
console.log(areYouStillAlive);
