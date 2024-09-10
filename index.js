const weatherData = {
    "New York": {
        temperature: 22,
        condition: "Sunny",
        icon: "☀️"
    },
    "London": {
        temperature: 18,
        condition: "Cloudy",
        icon: "☁️"
    },
    "Paris": {
        temperature: 25,
        condition: "Sunny",
        icon: "☀️"
    },
    // add more locations here
};

const weatherForm = document.querySelector("form");
const locationInput = document.querySelector("#location");
const weatherDataDiv = document.querySelector("#weather-data");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();
    if (weatherData[location]) {
        displayWeatherData(location);
    } else {
        alert("Location not found. Please try again.");
    }
});

function displayWeatherData(location) {
    const weatherInfo = weatherData[location];
    const html = `
        <p class="weather-info">Temperature: ${weatherInfo.temperature}°C</p>
        <p class="weather-info">Condition: ${weatherInfo.condition} ${weatherInfo.icon}</p>
    `;
    weatherDataDiv.innerHTML = html;
}