
const searchForm = document.querySelector('form');

const serachInput = document.querySelector('input');

let searchResult = document.querySelector('.searchResult');

let searchQery = '';

const APP_ID = '5e89de05';

const APP_KEY = 'd0b9dfbd4f0a089f29b96d80e0f56c28';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQery = serachInput.value;
    fetchAPI();
})

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits)
    console.log(data)
}

function generateHTML(results) {
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=
                `<div class="basis-1/4 bg-gray-800 rounded-md p-5 flex items-center justify-center flex-col">
                <div>
                    <img class="rounded-md" src="${result.recipe.image}" alt="">
                </div>
                <div class="pt-5 w-full">
                    <div class="flex justify-between">
                        <h3 class="text-2xl">${result.recipe.label}</h3>
                        <button class="bg-gray-300 text-gray-800 p-1 rounded-md hover:bg-gray-700 hover:text-lime-600" type="submit">View recipe</button>
                    </div>
                    <div class="py-2">
                        <p>Calories: ${result.recipe.calories.toFixed(2)} kcal</p>
                        <p>Diest label:</p>
                        <p>Health-label:</p>
                    </div>
                </div>
            </div>`
    })
    searchResult.innerHTML = generatedHTML;
}