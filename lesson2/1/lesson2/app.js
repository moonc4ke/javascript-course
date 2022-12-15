let searchValue;
var searchInput = document.getElementById('mySearch');

function search() {
    searchValue = searchInput.value;
    document.getElementById('searchText').innerHTML = searchValue;
}

searchInput.onkeydown = function (e) {
    if (e.key == 'Enter') {
        search();
    }
}