import { format } from 'date-fns';
import removeChildrenOfElement from './helper';
import dateConversion from './date-conversion';

const populateData = () => {
  const container = document.querySelector('#container');
  const scale = document.getElementById('radio-one').checked ? 'C' : 'F';

  const weatherDataContainer = document.getElementById('weather-data-container');

  removeChildrenOfElement('weather-data-container');

  let conversion;
  if (scale === 'C') {
    conversion = (val) => {
      const res = `${(val - 273.15).toFixed(0)}°`;
      return res;
    };
  } else {
    conversion = (val) => {
      const res = `${((val - 273.15) * (9 / 5) + 32).toFixed(0)}°`;
      return res;
    };
  }


  const data = JSON.parse(localStorage.getItem('weatherData'));


  const locationContainer = document.createElement('div');
  locationContainer.classList.add('location-container');

  const cityName = document.createElement('p');
  cityName.textContent = data.name;

  const countryName = document.createElement('p');
  countryName.textContent = data.sys.country;

  locationContainer.append(cityName, countryName);

  const innerContainer = document.createElement('div');
  innerContainer.classList.add('inner-container');

  const timeContainer = document.createElement('div');
  timeContainer.classList.add('d-flex', 'justify-between');

  const date = dateConversion(new Date(), data.timezone);

  const dayMonth = document.createElement('p');
  dayMonth.textContent = format(date, 'eeee, MMMM d');

  const currTime = document.createElement('p');
  currTime.textContent = format(date, 'p');

  timeContainer.append(dayMonth, currTime);

  const iconContainer = document.createElement('div');
  iconContainer.classList.add('d-flex', 'justify-center', 'align-center');

  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('d-block');
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const temp = document.createElement('div');
  temp.classList.add('current-temp');
  temp.textContent = `${conversion(data.main.temp)}`;

  const sub = document.createElement('span');
  sub.textContent = scale;
  sub.classList.add('sub');

  const feelsLike = document.createElement('span');
  feelsLike.textContent = `Feels like    ${conversion(data.main.feels_like)}`;
  feelsLike.classList.add('feels-like');
  temp.append(sub, feelsLike);

  iconContainer.append(weatherIcon, temp);

  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = `${data.weather[0].main}, ${data.weather[0].description}`;
  weatherDescription.classList.add('weather-description');

  // console.log(data);

  innerContainer.append(timeContainer, iconContainer, weatherDescription);

  const variousParamContainer = document.createElement('div');
  variousParamContainer.classList.add('various-param-container');
  const sunriseTime = dateConversion(new Date((data.sys.sunrise) * 1000), data.timezone);
  const sunsetTime = dateConversion(new Date((data.sys.sunset) * 1000), data.timezone);

  const params = {
    Humidity: `${data.main.humidity}%`,
    Pressure: `${data.main.pressure} hPa`,
    'Max Temp': `${conversion(data.main.temp_max)}${scale}`,
    'Min Temp': `${conversion(data.main.temp_min)}${scale}`,
    'Wind Speed': `${data.wind.speed} meter/sec`,
    'Wind Direction': `${data.wind.deg}°`,
    Cloudiness: `${data.clouds.all}%`,
    Visibility: `${data.visibility} meters`,
    Sunrise: `${format(sunriseTime, 'p')}`,
    Sunset: `${format(sunsetTime, 'p')}`,
  };

  // console.log(params.Visibility);


  Object.keys(params).forEach((key) => {
    const paramDiv = document.createElement('div');
    paramDiv.classList.add('param-div', 'd-flex', 'justify-between');

    const keyDiv = document.createElement('div');
    keyDiv.textContent = key;

    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value-div');
    valueDiv.textContent = params[key];

    paramDiv.append(keyDiv, valueDiv);
    variousParamContainer.appendChild(paramDiv);
  });


  weatherDataContainer.append(locationContainer, innerContainer, variousParamContainer);
  container.appendChild(weatherDataContainer);

  // console.log(conversion(data.main.temp));
};

export default populateData;