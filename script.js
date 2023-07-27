searchbtn = document.getElementById('search-button');
searchbar = document.getElementById('search');
wordDisplay = document.getElementById('word');

API_KEY = 'c3e9f124-8fd5-43a5-8bcf-e8ef5545a410';
API_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/word?key=' + API_KEY;
let word = 'test';



searchbtn.addEventListener('click', function() {
    word = searchbar.value;
    fetch(API_URL.replace('word', word))
    .then(response => response.json())
    .then(data => {
        wordDisplay.innerHTML = data[0].meta.syns[0][0];
    });
} );

// If the user presses enter, it will also search
searchbar.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchbtn.click();
    }
});

