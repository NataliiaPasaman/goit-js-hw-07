import { galleryItems } from './gallery-items.js';

/** Створи галерею з можливістю кліку по її елементах і 
 * перегляду повнорозмірного зображення у модальному вікні.
 *  Подивися демо відео роботи галереї.


Реалізація делегування на div.gallery і отримання url 
великого зображення. 
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



