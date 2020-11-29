import getWeatherData from './get-weather-data';

const form = () => {
  const navContainer = document.querySelector('#nav-container');
  const formTag = document.createElement('form');
  const cityInput = document.createElement('input');
  cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('placeholder', 'Type city name here..');
  cityInput.setAttribute('id', 'city-name-input');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submit-button');
  submitBtn.textContent = 'Search';
  submitBtn.onclick = (e) => {
    e.preventDefault();
    getWeatherData(cityInput.value);
  };

  formTag.append(cityInput, submitBtn);
  navContainer.appendChild(formTag);
};

export default form;