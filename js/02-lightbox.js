// 1. Відмалювати розмітку (map + шаблонний рядок  )
// 2. Підставити в розмітку поля (${})
// 3. Навісити клік на галерею  (делегування)
// 4. Визначення ел по якому був клік (event.target)
// 5. Підставити данні у модалку з дата сорс (dataSet)

import { galleryItems } from './gallery-items.js';

const galleryImgContainer = document.querySelector(".gallery");
const ImgMarkup = createImgMarkup(galleryItems);
galleryImgContainer.insertAdjacentHTML('beforeend', ImgMarkup);

function createImgMarkup (array) {
    return array
        .map(
            (item) => 
                `<a class="gallery__item" href="${item.original}">
                   <img 
                   class="gallery__image" 
                   src="${item.preview}" 
                   alt="${item.description}" />
                </a>`
    )
        .join("");
}

const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});
    
