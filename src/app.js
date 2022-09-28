const search = document.querySelector('searchForm')
let searchResult = '';
const APP_ID = '5e89de05';
const APP_KEY = 'd0b9dfbd4f0a089f29b96d80e0f56c28';
const baseURL  = 'https://api.edamam.com/api/recipes/v2'

search.addEventListener('submit', () => {
    searchResult = document.getElementById('searchInput').value;
    console.log(searchResult);
})

