const changeBackground = (imageURL) => {
  const body = document.querySelector('body');
  body.style.backgroundImage = `url('${imageURL}')`;
};

export default changeBackground;