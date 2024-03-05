const apiKey = '199e7e1facdb377c559a054cb28fe1c3'; // Replace with your OpenWeatherMap API key

const locationForm = document.getElementById('locationForm');
const locationInput = document.getElementById('locationInput');
const weatherElement = document.getElementById('weather');

locationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const location = locationInput.value.trim();
    if (location === '') {
        alert('Please enter a city name');
        return;
    }
    fetchWeather(location);
});

function fetchWeather(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error(error);
            weatherElement.textContent = 'Failed to fetch weather data. Please try again later.';
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
    weatherElement.innerHTML = weatherHTML;
}
