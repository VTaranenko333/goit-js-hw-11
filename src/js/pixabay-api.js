const API_KEY = '46068756-c5f919e10572d3f09e9540b43';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const data = await response.json();
  return data.hits;
}
