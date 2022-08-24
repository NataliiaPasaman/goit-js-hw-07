import { galleryItems } from './gallery-items.js';

/** Створи галерею з можливістю кліку по її елементах і 
 * перегляду повнорозмірного зображення у модальному вікні.
 *  Подивися демо відео роботи галереї.



Підключення скрипту і стилів бібліотеки модального вікна 
basicLightbox. Використовуй CDN сервіс jsdelivr і додай
у проект посилання на мініфіковані (.min) файли бібліотеки.
 */



// 1. Створення галереї зображень
const divGallery = document.querySelector('.gallery');
createImgGallery(galleryItems);

function createImgGallery (array) {
    array.forEach(({ preview, original, description }) => {
        const imgElement = document.createElement('img');
    
        imgElement.dataSource = original;
        imgElement.src = preview;
        imgElement.alt = description;
    
        divGallery.appendChild(imgElement);
    })
}


// 2. Делегування на div.gallery
divGallery.addEventListener('click', onClickGallery)

function onClickGallery (event) {
    const urlOriginal = event.target.dataSource;
    console.log('URL original', urlOriginal);
  
}