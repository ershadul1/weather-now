import removeChildrenOfElement from './helper';

const invalidCity = () => {
  const container = document.querySelector('#weather-data-container');
  removeChildrenOfElement('weather-data-container');
  const sub = document.createElement('h1');
  sub.textContent = 'City not found';
  container.appendChild(sub);
};

export default invalidCity;