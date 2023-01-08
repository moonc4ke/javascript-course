let submit = document.getElementById('submitFavoriteImage');
let imageURL = document.getElementById('favoriteImage');
let count = document.getElementById('count');
let result = document.getElementById('result');

submit.onclick = function () {
    result.innerHTML = '';
    let image = document.createElement('img');
    image.src = imageURL.value;
    image.style.width = '150px';
    image.style.height = '200px';
    if (count.value <= 0) {
        result.innerHTML = 'No image, as you wished';
    }
    else {
        for (i = 1; i <= count.value; i += 1) {
            result.appendChild(image.cloneNode(true));
        }
    }
}