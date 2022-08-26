import { galleryItems } from "./gallery-items.js";

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
divGallery.addEventListener("click", onClicItemkGallery);
window.addEventListener("keydown", onEscapeClose);

let instance = null;


function onClicItemkGallery(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  };

  const urlOriginal = event.target.dataset.source;
  console.log("URL original", urlOriginal);

  // 3. Модалка з бібліотеки basicLightbox
  instance = basicLightbox.create(`
    <img class="gallery__image" src="${urlOriginal}"/>
`);

  instance.show();
  window.addEventListener("keydown", onEscapeClose);
}


function onCloseModal() {
  instance.close();
  window.removeEventListener("keydown", onEscapeClose);
}


function onEscapeClose(event) {
  console.log("Code", event.code);

  if (event.code === "Escape") {
    onCloseModal();
  }
}
