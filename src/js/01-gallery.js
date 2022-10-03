import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.innerHTML = createGalleryMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: '250ms',
});

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" />
                    </a>`;
    })
    .join('');
}
