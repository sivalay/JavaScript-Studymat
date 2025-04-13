const apikey = "a";
const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');
console.log(search)

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherLocation(city){
    const resp = await fetch(url(city), {
        origin : "cors"
    });
    const respData = await resp.json();
    // console.log(respData, KtoC(respData.main.temp));

    addWeatherToPage(respData)
}
// getWeatherLocation("London")



function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <h2>${temp}°C</h2>
        <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png">
        <p>In ${search.value}</p>
    `;

    // cleanUp
    main.innerHTML = ''
    search.value = ''

    main.appendChild(weather);
}

function KtoC(K){
    return (K - 273.15).toFixed(2);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();


    const city = search.value;

    if (city){
        getWeatherLocation(city)
    }
});