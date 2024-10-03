export function fetchImages(query) {
  const URL = 'https://pixabay.com/api/?key=';
  const KEY = '46309603-7d83d81f3414b6bb7a2d6c2e1';

  return fetch(
    `${URL}${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      iziToast.error({
        message: 'Something went wrong',
        position: 'bottomRight',
      });
    }
    return response.json();
  });
}
