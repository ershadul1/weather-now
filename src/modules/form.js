const form = () => {
  const container = document.querySelector('#container');

  const formTag = document.createElement('form');

  const cityInput = document.createElement('input');
  cityInput.setAttribute('type', 'text');
  cityInput.setAttribute('placeholder', 'Type city name here..');
  cityInput.setAttribute('id', 'city-name');

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submit-button');
  submitBtn.textContent = 'Get weather data';

  formTag.append(cityInput, submitBtn);
  container.appendChild(formTag);
}

export default form;