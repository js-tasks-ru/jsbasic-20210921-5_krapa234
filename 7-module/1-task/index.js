import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
    constructor(categories) {
        this.categories = categories;
        this.elem = document.querySelector('.container');
        this.render();
        this.scroll();
        this.select();
    }


    render() {
        this._navCategories = this.categories.map(item => `
          <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
        `);

        this.elem = createElement(`
          <div class="ribbon">

            <button class="ribbon__arrow ribbon__arrow_left">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>

            <nav class="ribbon__inner">
              ${this._navCategories}
            </nav>

            <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
              <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>

          </div>
       `);
    }

    scroll() {
        const inner = this.elem.querySelector('.ribbon__inner');
        const btnL = this.elem.querySelector('.ribbon__arrow_left');
        const btnR = this.elem.querySelector('.ribbon__arrow_right');

        btnL.addEventListener('click', event => {
            inner.scrollBy(-350, 0);
        });

        btnR.addEventListener('click', () => {
            inner.scrollBy(350, 0);
        });


        inner.addEventListener('scroll', event => {
            let scrollRight = inner.scrollWidth - inner.clientWidth - inner.scrollLeft;

            if (inner.scrollLeft == 0) {
                btnL.classList.remove('ribbon__arrow_visible');
            } else {
                btnL.classList.add('ribbon__arrow_visible');
            }

            if (scrollRight < 1) {
                btnR.classList.remove('ribbon__arrow_visible');
            } else {
                btnR.classList.add('ribbon__arrow_visible');
            }
        })
    }

    select() {
        const inner = this.elem.querySelector('.ribbon__inner');

        inner.addEventListener('click', event => {
            event.preventDefault();

            let active = this.elem.querySelector('.ribbon__item_active');
            if (active) {
                active.classList.remove('ribbon__item_active');
            }
            event.target.classList.add('ribbon__item_active');

            event.target.dispatchEvent(new CustomEvent('ribbon-select', {
                detail: event.target.dataset.id,
                bubbles: true
            }))
        })
    }
}
