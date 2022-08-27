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
let instance = null;

function onClicItemkGallery(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const urlOriginal = event.target.dataset.source;
  console.log("URL original", urlOriginal);

  // 3. Модалка з бібліотеки basicLightbox
  instance = basicLightbox.create(
    `
    <img class="gallery__image" src="${urlOriginal}"/>
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscapeClose);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscapeClose);
      },
    }
  );

  instance.show();
}

function onCloseModal() {
  instance.close();
}

// 4.Функція перевірки закриття модалки по Escape
function onEscapeClose(event) {
  console.log("Code", event.code);

  if (event.code === "Escape") {
    onCloseModal();
  }
}
