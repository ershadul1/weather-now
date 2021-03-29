const removeChildrenOfElement = (id) => {
  const nodesToRemove = document.getElementById(id);

  while (nodesToRemove.lastElementChild) {
    nodesToRemove.removeChild(nodesToRemove.lastElementChild);
  }
};

const convertToCelsius = (val) => {
  const res = `${(val - 273.15).toFixed(0)}°`;
  return res;
};

const convertToFareheit = (val) => {
  const res = `${((val - 273.15) * (9 / 5) + 32).toFixed(0)}°`;
  return res;
};

const convert = (scale) => {
  if (scale === 'C') {
    return convertToCelsius;
  }

  if (scale === 'F') {
    return convertToFareheit;
  }
}

export { removeChildrenOfElement, convert };