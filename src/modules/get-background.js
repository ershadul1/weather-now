import changeBackground from './change-background';

const getBackground = async (weatherType) => {
  try {
    const apiKey = process.env.IMG_KEY;
    const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${weatherType}+sky&image_type=photo&pretty=true&editors_choice=true`);
    const background = await response.json();
    if (background.cod === '404') {
      // failed
    } else {
      const len = background.hits.length;
      changeBackground(background.hits[Math.floor(Math.random() * len)].largeImageURL);
    }
  } catch {
    // errors
  }
};

export default getBackground;