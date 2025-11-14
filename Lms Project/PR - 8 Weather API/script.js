const API_KEY = "fd54f0a1ff2425995421617e162ce5bd";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const errorBox = document.getElementById("error");
const loader = document.getElementById("loader");

const weatherCard = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feels = document.getElementById("feels");
const description = document.getElementById("description");
const icon = document.getElementById("icon");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        errorBox.textContent = "Please enter a city name.";
        return;
    }

    errorBox.textContent = "";
    weatherCard.classList.add("hidden");
    loader.classList.remove("hidden");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temp.textContent = `${data.main.temp}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} km/h`;
        feels.textContent = `${data.main.feels_like}°C / ${data.main.temp_min}°C / ${data.main.temp_max}°C`;

        description.textContent = data.weather[0].description;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherCard.classList.remove("hidden");
    } catch (err) {
        errorBox.textContent = "City not found. Try again.";
    }

    loader.classList.add("hidden");
}
