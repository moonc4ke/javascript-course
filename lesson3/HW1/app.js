let age = document.getElementById('myAge');
let ageStatus = document.getElementById('yourStatus');

document.getElementById('checkMyStatus').onclick = function () {

    if (age.value >= 18) {
        ageStatus.innerHTML = 'You are an adult';
    }
    else if (age.value < 18 && age.value > 0) {
        ageStatus.innerHTML = 'You are a child';
    }
    else {
        ageStatus.innerHTML = 'Please enter a correct age number';
    }
}