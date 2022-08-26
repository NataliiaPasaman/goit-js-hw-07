import { galleryItems } from "./gallery-items.js";

const listGallery = document.querySelector(".gallery");

const linksGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
         <a class="gallery__item" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             alt="${description}"
           />
         </a>
         `;
  })
  .join(" ");

listGallery.insertAdjacentHTML("beforeend", linksGallery);

let galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
