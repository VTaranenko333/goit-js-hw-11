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
      return;
    }

    renderImages(images, gallery);
    loader.classList.add('hidden');

    if (!lightbox) {
      lightbox = new SimpleLightbox('.gallery-link');
    } else {
      lightbox.refresh();
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
