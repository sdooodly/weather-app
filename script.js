const axios = require('axios');

const apiKey = '388b8f9d6fmsh3f070eddbd46adap1baeacjsnd445dc925626';

const getWeather = async () => {
  const lat = document.getElementById('lat').value;
  const lon = document.getElementById('lon').value;

  const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    params: {
      lon: lon,
      lat: lat
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const weatherData = response.data.data[0];
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
      <h2>Current Weather for ${weatherData.city_name}</h2>
      <p>Temperature: ${weatherData.temp}&deg;C</p>
      <p>Weather: ${weatherData.weather.description}</p>
    `;
  } catch (error) {
    console.error(error);
  }
}

const getWeatherBtn = document.getElementById('get-weather-btn');
getWeatherBtn.addEventListener('click', getWeather);
