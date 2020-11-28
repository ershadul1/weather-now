import form from './modules/form';
import scaleSwitcher from './modules/scale-switch';
import './styles/style.css';
import getWeatherData from './modules/get-weather-data';


const container = document.querySelector('#container');
const navContainer = document.createElement('div');
navContainer.setAttribute('id', 'nav-container');
const weatherDataContainer = document.createElement('div');
weatherDataContainer.setAttribute('id', 'weather-data-container');
container.append(navContainer, weatherDataContainer);

form();
scaleSwitcher();
getWeatherData('dhaka');