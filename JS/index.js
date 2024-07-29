// 9aab7642109854184fc44b47a51cccdf

const apiKey = "9aab7642109854184fc44b47a51cccdf"

const cityInput = document.querySelector(".input");
const searchBtn = document.querySelector("#Search");


const cityElement = document.querySelector(".city")
const flagElement = document.querySelector("#country")
const weatherElement = document.querySelector(".weather")
const iconElement = document.querySelector("#weather-icon")
const tempElement = document.querySelector(".temp")

// functions
async function getWeather (city){
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units-metric&appid=${apiKey}&lang-pt_br`

    const res = await fetch(weatherUrl)
    const data = await res.json();

    console.log(data)
    return data

    
}
async function showWeather (city) {
    const data = await getWeather(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(kelvinToCelsius(data.main.temp).toFixed(2)) + "°";
    weatherElement.innerText = data.weather[0].description;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`) 
    flagElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)

}

function kelvinToCelsius(kelvin){
    return kelvin - 273.15;
}


// Events

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const city = cityInput.value;

    showWeather(city);
})

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const city = e.target.value;

        showWeather(city);
    }
})