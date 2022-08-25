import { galleryItems } from "./gallery-items.js";

/** Створи галерею з можливістю кліку по її елементах і 
 * перегляду повнорозмірного зображення у модальному вікні.
 *  Подивися демо відео роботи галереї.

4/ Відкриття модального вікна по кліку на елементі галереї.

5/ Заміна значення атрибута src елемента <img> в 
модальному вікні перед відкриттям. Використовуй готову 
розмітку модального вікна із зображенням з прикладів 
бібліотеки basicLightbox.
 */

// 1. Створення галереї зображень
const divGallery = document.querySelector(".gallery");

const imgGalleryNew = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
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
  .join(" ");

divGallery.insertAdjacentHTML("beforeend", imgGalleryNew);

// 2. Делегування на div.gallery
divGallery.addEventListener('click', onClickGallery)

function onClickGallery (event) {
    event.preventDefault()

    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    const urlOriginal = event.target.dataset.source;
    console.log('URL original', urlOriginal);

    // 3. Модалка з бібліотеки basicLightbox
    let instance = basicLightbox.create(`
    <img class="gallery__image" src="${urlOriginal}"/>
`)
instance.show()
}


