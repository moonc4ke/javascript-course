let age = document.getElementById('myAge');
let ageStatus = document.getElementById('yourStatus');

document.getElementById('checkMyStatus').onclick = function () {
    switch (true) {
        case (age.value >= 18):
            ageStatus.innerHTML = 'You are an adult';
            break;

        case (age.value < 18 && age.value >= 0):
            ageStatus.innerHTML = 'You are a child';
            break;

        default:
            ageStatus.innerHTML = 'Please enter a correct age number';
    }
}