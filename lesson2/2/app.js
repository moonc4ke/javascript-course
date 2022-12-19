/** 
* @type HTMLInputElement
*/
let firstNumber = document.getElementById('firstNumber');
/** 
* @type HTMLInputElement
*/
let secondNumber = document.getElementById('secondNumber');

let resultText = document.getElementById('multiplicationResult');

document.getElementById('multiplyTwoNumbers').onclick = function () {
    let result = Number(firstNumber.value) * Number(secondNumber.value);
    if (isNaN(result)) {
        resultText.innerHTML = 'Please, enter a number!';
    }
    else {
        resultText.innerHTML = result;
    }
}