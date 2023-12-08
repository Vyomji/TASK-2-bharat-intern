const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=udaipur&appid=3f1f39bc2cb61093456d9a8f68024f77'; // Replace with your API key

async function getWeather() {
  try {
    const response = await fetch(apiKey);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}

function displayWeather(data) {
  document.getElementById('location').textContent = data.name + ', ' + data.sys.country;
  document.getElementById('temperature').textContent = data.main.temp;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('humidity').textContent = data.main.humidity;
  document.getElementById('wind-speed').textContent = data.wind.speed;
}

getWeather();
