import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryCardsMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryCardsMarkup);

gallery.addEventListener('click', onCardsClick);

// gallery.addEventListener('Keydown', onCardsClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
    })
    .join('');
}

function onCardsClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  modal.show();
}

// function onCloseModalOfEsc(event) {
//     if()
// }
