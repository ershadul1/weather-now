import populateData from './populate-data';
import getBackground from './get-background';
import invalidCity from './invalid-input';

const getWeatherData = async (cityName) => {
  try {
    const apiKey = process.env.API_KEY;
    const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const weatherData = await apiResponse.json();

    if (weatherData.cod === '404') {
      invalidCity();
    } else {
      localStorage.setItem('weatherData', JSON.stringify(weatherData));
      populateData();
      getBackground(weatherData.weather[0].main);
    }
  } catch {
    throw new Error('Failed to fetch from: Open Weather API');
  }
};

export default getWeatherData;