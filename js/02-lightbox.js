// 1. Відмалювати розмітку (map + шаблонний рядок  )
// 2. Підставити в розмітку поля (${})
// 3. Навісити клік на галерею  (делегування)
// 4. Визначення ел по якому був клік (event.target)
// 5. Підставити данні у модалку з дата сорс (dataSet)

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

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

const result = createImgMarkup(galleryItems);
console.log(result);

const galleryImg = document.querySelector(".gallery");
galleryImg.insertAdjacentHTML('beforeend', result);

