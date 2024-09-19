import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
let lightbox;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = form.query.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'OMG!?... Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message: 'OMG!?... No images found!',
        position: 'topRight',
      });
    } else {
      renderImages(images, gallery);
      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery-link');
      } else {
        lightbox.refresh();
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'OMG!?... Something went wrong!',
      position: 'topRight',
    });
  } finally {
    loader.classList.add('hidden');
  }
});

const styles = `
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

body {
  font-family: 'Montserrat', sans-serif;
}

.search-form {
  margin: 20px;
  text-align: center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 24px;
  padding: 20px;
}

.photo-card {
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.photo-card-img {
  width: 100%;
  height: auto;
  flex: 1;
}

.loader {
   position: fixed;
  top: 100;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 64px;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.loader:after {
  content: '';
  position: absolute;
  inset: 8px;
  margin: auto;
  background: #222b32;
}
.loader:before {
  content: '';
  position: absolute;
  inset: -15px;
  margin: auto;
  background: #de3500;
  animation: diamondLoader 2s linear infinite;
}
@keyframes diamondLoader {
  0%  ,10% {
    transform: translate(-64px , -64px) rotate(-45deg)
  }
  90% , 100% {
    transform: translate(0px , 0px) rotate(-45deg)
  }
}

.hidden {
  display: none;
}

.info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: auto;
  height: 48px;
  padding: 4px 0;
}

input {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #2e2f42;
  border: 1px solid #808080;
  border-color: #808080;
  border-radius: 4px;
  min-width: 274px;
  height: 40px;
  padding: 0px 16px;
}

input:hover {
  border-color: #000;
}

input:focus {
  border-color: #4e75ff;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  width: auto;
  height: 40px;
  background: #4e75ff;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #fff;
}

button:hover {
  border: none;
  background: #6c8cff;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #fff;
}
`;

const styleSheet = document.createElement('style');
styleSheet.innerText = styles;

document.head.appendChild(styleSheet);
