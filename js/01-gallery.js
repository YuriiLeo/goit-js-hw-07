// 1. Відмалювати розмітку (reduce, деструктур + шаблонний рядок)
// 2. Підставити в розмітку поля (${})
// 3. Навісити клік на галерею  (делегування)
// 4. Визначення ел по якому був клік (event.target)
// 5. Підключити модалку
// 6. Підставити данні у модалку з дата сорс(dataSet)
 
import { galleryItems } from './gallery-items.js';

// 1 створення розмітки
const galleryImgContainer = document.querySelector(".gallery");
const ImgMarkup = createImgMarkup(galleryItems);
galleryImgContainer.insertAdjacentHTML('beforeend', ImgMarkup);

function createImgMarkup (array) {
    return array.reduce(
        (acc, {original, preview, description}) => acc +
          `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>`,
        ""
    );
}

// 2 делегування, підключення 
galleryImgContainer.addEventListener('click', onGalleryImgContainerClick);

function onGalleryImgContainerClick(evt) {
    evt.preventDefault();
    const isGalleryImageEl = evt.target.classList.contains("gallery__image")
    if (!isGalleryImageEl) {
        return;
    }
    console.log(evt.target.dataset.source);   

    const imgEl = evt.target;
    const instance = basicLightbox.create(`<img src=${imgEl.dataset.source}>`);
  instance.show();
  
  window.addEventListener("keydown", onPressEscKey);

 function onPressEscKey(evt) {
  const ESC_KEY_CODE = "Escape";
  if (evt.code === ESC_KEY_CODE) {
    instance.close();
  }
 }
}

