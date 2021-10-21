import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
    constructor(slides) {
        this.slides = slides;
        this.elem = document.querySelector('container');
        this.render();
        this.slidesBtn();
        this.handleAddBtn();
    }

    render() {
        this._carouselSlide = this.slides.map(item =>
            `<div class="carousel__slide" data-id="${item.id}">
          <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${'€' + item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
        </div>`
        );

        this.elem = createElement(`
        <div class="carousel">

        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${this._carouselSlide}
        </div>
        </div>
       `);
    }

    slidesBtn() {
        const nextBtn = this.elem.querySelector('.carousel__arrow_right');
        const prevBtn = this.elem.querySelector('.carousel__arrow_left');
        const slide = this.elem.querySelector('.carousel__slide');
        const carousel = this.elem.querySelector('.carousel__inner');
        let position = 0;

        const hiddenBtn = (slidePosition, lastSlidePosition) => {
            if (slidePosition === 0) {
                prevBtn.style.display = 'none';
            } else if (Math.abs(slidePosition) === lastSlidePosition) {
                nextBtn.style.display = 'none';
            } else {
                nextBtn.style.display = '';
                prevBtn.style.display = '';
            }
        }

        if (position === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = '';
        }

        nextBtn.addEventListener('click', (event) => {
            let lastSlideOffset = slide.offsetWidth * (this.slides.length - 1);
            position -= slide.offsetWidth;
            carousel.style.transform = `translateX(${position}px)`;
            hiddenBtn(position, lastSlideOffset);
        });

        prevBtn.addEventListener('click', (event) => {
            let lastSlideOffset = slide.offsetWidth * (this.slides.length - 1);
            position += slide.offsetWidth;
            carousel.style.transform = `translateX(${position}px)`;
            hiddenBtn(position, lastSlideOffset);
        });
    }

    handleAddBtn() {
        this.elem.addEventListener('click', (event) => {
            console.log()
            if (event.target.className === 'carousel__button' ||
                event.target.parentElement.className === 'carousel__button') {
                let currentSlide = event.path.find(node => node.className === 'carousel__slide');
                let { id } = currentSlide.dataset;
                this.elem.dispatchEvent(new CustomEvent('product-add', {
                    detail: id,
                    bubbles: true
                }));
            }
        });
    }
}
