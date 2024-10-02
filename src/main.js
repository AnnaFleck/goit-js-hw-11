import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { handleSuccess } from './js/render-functions.js';

const input = document.querySelector('.input');
const gallery = document.querySelector('.gallery');
const btn = document.querySelector('.button');

btn.addEventListener('click', event => {
  event.preventDefault();
  const query = input.value;
  if (query === '') {
    iziToast.error({
      message: 'Enter a search query',
      position: 'center',
    });
    return;
  }
  const result = fetchImages(query);
  result
    .then(value => {
      const images = value.hits;
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
        return;
      }
      gallery.insertAdjacentHTML('beforeend', handleSuccess(images));
      console.log(value.hits);
    })
    .catch(error => {
      iziToast.error({
        message: 'Error! Something went wrong.',
        position: 'center',
      });
    });
});
