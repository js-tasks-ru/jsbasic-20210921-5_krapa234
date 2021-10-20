import createElement from '../../assets/lib/create-element.js';


export default class ProductCard {
    constructor(product) {
        this._product = product;
        this.elem = document.querySelector('#holder');
        this.render();
    }


    render() {

        const src = `/assets/images/products/${this._product.image}`;
        const price = '€' + this._product.price.toFixed(2);

        this.elem = createElement(`
        <div class="card">
        <div class="card__top">
            <img src="${src}" class="card__image" alt="product">
            <span class="card__price">${price}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this._product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
    </div>
    `);

        const button = this.elem.querySelector('.card__button');
        button.addEventListener('click', this.onClick);
    }

    onClick = () => {
        const customEvent = new CustomEvent("product-add", {
            detail: this._product.id,
            bubbles: true
        });
        this.elem.dispatchEvent(customEvent);
    }
}
