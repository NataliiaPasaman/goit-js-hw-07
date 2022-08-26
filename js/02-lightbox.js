import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);


/** */

const listGallery = document.querySelector(".gallery");

const itemsGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
         <a class="gallery__item" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
           />
         </a>
         `;
  })
  .join(" ");

listGallery.insertAdjacentHTML("beforeend", itemsGallery);
