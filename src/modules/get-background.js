import changeBackground from './change-background';

const getBackground = async (weatherType) => {
  try {
    const apiKey = process.env.IMG_KEY;
    const apiResponse = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${weatherType}+sky&image_type=photo&pretty=true&editors_choice=true`);
    const background = await apiResponse.json();
    if (background.cod === '404') {
      throw new Error('Image not found: Pixabay API');
    } else {
      const len = background.hits.length;
      changeBackground(background.hits[Math.floor(Math.random() * len)].largeImageURL);
    }
  } catch {
    throw new Error('Failed to fetch from: Pixabay API');
  }
};

export default getBackground;