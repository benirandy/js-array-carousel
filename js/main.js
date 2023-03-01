const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const imageListDom = document.querySelector('.image-list');
const circleContainerDom = document.querySelector('.circle-container');
const thumbContainerDom = document.querySelector('.thumb-container');

let sliderContent = "";
let circleContent = "";
let thumbContent = "";

for (let i = 0; i < imagesArray.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesArray[i]}" />
                            </div>`;

    const newCircle = `<div class="circle"></div>`;
    const newThumb = `<div class="thumb-wrapper">
                            <img class="thumb-img" src="${imagesArray[i]}" />
                        </div>`;
    sliderContent += newImageWrapper;
    circleContent += newCircle;
    thumbContent += newThumb;
}

imageListDom.innerHTML = sliderContent;
circleContainerDom.innerHTML = circleContent;
thumbContainerDom.innerHTML = thumbContent;

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const circlesDom = document.getElementsByClassName('circle');
const thumbsDom = document.getElementsByClassName('thumb-wrapper');

for (let i = 0; i < thumbsDom.length; i++) {
    thumbsDom[i].style.height = `calc(100% / ${thumbsDom.length}`;
}

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');
circlesDom[activeImage].classList.add('current');
thumbsDom[activeImage].classList.add('active');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click',
    function () {
        if (activeImage < imagesWrapperDom.length - 1) {

            console.log("Valore di activeImage dentro ascoltatore eventi: " + activeImage);

            if (activeImage < imagesWrapperDom.length - 1) {

                console.log("Valore di activeImage all'inizio della gestione dell'evento: " + activeImage);

                imagesWrapperDom[activeImage].classList.remove('show');

                activeImage++;
                thumbsDom[activeImage].classList.remove('active');

                if (activeImage == imagesWrapperDom.length - 1) {
                    activeImage = 0;
                } else {
                    activeImage = activeImage + 1;
                }

                imagesWrapperDom[activeImage].classList.add('show');
                thumbsDom[activeImage].classList.add('active');

                prevDom.classList.remove('hide');

                prevDom.classList.remove('hide');
                if (activeImage == imagesWrapperDom.length - 1) {
                    nextDom.classList.add('hide');
                }
                console.log("Valore di activeImage per la slide seguente: " + activeImage);
                if (activeImage == imagesWrapperDom.length - 1) {
                    nextDom.classList.add('hide');
                }


            }

        }
    }
);

prevDom.addEventListener('click',
    function () {
        if (activeImage > 0) {
            if (activeImage > 0) {

                imagesWrapperDom[activeImage].classList.remove('show');

                activeImage--;
                imagesWrapperDom[activeImage].classList.add('show');

                nextDom.classList.remove('hide');
                thumbsDom[activeImage].classList.remove('active');

                if (activeImage == 0) {
                    prevDom.classList.add('hide');
                    activeImage = imagesWrapperDom.length - 1;
                } else {
                    activeImage--;
                }

            }
            imagesWrapperDom[activeImage].classList.add('show');
            thumbsDom[activeImage].classList.add('active');


            nextDom.classList.remove('hide');
            if (activeImage == 0) {
                prevDom.classList.add('hide');
            }


        }
    }
);