/* 199e7e1facdb377c559a054cb28fe1c3 */

const input = document.querySelector("input");
const btn = document.getElementById("btn");

const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
    let city = input.value;
    getWeather(city);
})

function getWeather(city) {
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'199e7e1facdb377c559a054cb28fe1c3'}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const iconCode = data.weather[0].icon;
            icon.innerHTML = `<img src = "http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`
            
            const weatherCity = data.name;
            const weatherCountry = data.sys.country;
            weather.innerHTML =`${weatherCity}, ${weatherCountry}`;

            const weatherTemperature = data.main.temp;
            const weatherTemperatureC = weatherTemperature - 273.15;
            temperature.innerHTML = `${weatherTemperatureC.toFixed(2)} °C`;

            const weatherDescription = data.weather[0].description;
            description.innerHTML=`${weatherDescription}`;
        })
}


const apikey = '199e7e1facdb377c559a054cb28fe1c3';

