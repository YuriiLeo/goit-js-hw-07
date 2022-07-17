// 1. Відмалювати розмітку (reduce, деструктур + шаблонний рядок)
// 2. Підставити в розмітку поля (${})
// 3. Навісити клік на галерею  (делегування)
// 4. Визначення ел по якому був клік (event.target)
// 5. Підставити данні у модалку з дата сорс (dataSet)
// 6. 
import { galleryItems } from './gallery-items.js';

// 1 створення розмітки
console.log(galleryItems);

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

const ImgMarkup = createImgMarkup(galleryItems);
// console.log(ImgMarkup);

const galleryImgContainer = document.querySelector(".gallery");
galleryImgContainer.insertAdjacentHTML('beforeend', ImgMarkup);

// 2 делегування
galleryImgContainer.addEventListener('click', onGalleryImgContainerClick);

function onGalleryImgContainerClick(evt) {
    const isGalleryImageEl = evt.target.classList.contains("gallery__image")
    if (!isGalleryImageEl) {
        return;
    }
    evt.preventDefault();
    console.log(evt.target.dataset.source);   

    const imgEl = evt.target;
    const parentGalleryImage = imgEl.closest('.gallery__item')

    removeOpenModalClass();
    addOpenModalClass(parentGalleryImage)

    console.log(parentGalleryImage);

    // модалка = imgEl.dataset.source;   
    
    // console.log(curentOpenImage);
    // console.log(imgEl.classList);
}

function removeOpenModalClass() {
    const curentOpenImage = document.querySelector('.gallery__item.modal__open');

    if (curentOpenImage) {
        curentOpenImage.classList.remove('modal__open')
    }
}

function addOpenModalClass(img) {
    img.classList.add('modal__open');
}


// const curentActiveImg = document.querySelector('.modal-open');