import populateData from './populate-data';

const scaleSwitcher = () => {
  const navContainer = document.querySelector('#nav-container');
  const switchDiv = document.createElement('div');
  switchDiv.classList.add('switch-field');

  const celciusBtn = document.createElement('input');
  celciusBtn.setAttribute('type', 'radio');
  celciusBtn.setAttribute('id', 'radio-one');
  celciusBtn.setAttribute('name', 'switch-one');
  celciusBtn.setAttribute('value', 'C');
  celciusBtn.checked = true;
  celciusBtn.onclick = () => {
    populateData();
  };
  const celciusBtnLabel = document.createElement('label');
  celciusBtnLabel.setAttribute('for', 'radio-one');
  celciusBtnLabel.textContent = 'Celsius';

  const farenheitBtn = document.createElement('input');
  farenheitBtn.setAttribute('type', 'radio');
  farenheitBtn.setAttribute('id', 'radio-two');
  farenheitBtn.setAttribute('name', 'switch-one');
  farenheitBtn.setAttribute('value', 'F');
  farenheitBtn.onclick = () => {
    populateData();
  };
  const farenheitBtnLabel = document.createElement('label');
  farenheitBtnLabel.setAttribute('for', 'radio-two');
  farenheitBtnLabel.textContent = 'Farenheit';


  switchDiv.append(celciusBtn, celciusBtnLabel, farenheitBtn, farenheitBtnLabel);
  navContainer.appendChild(switchDiv);
};

export default scaleSwitcher;
