import createElement from '../../assets/lib/create-element.js';

export default class Modal {
    constructor() {
        this.elem;
        this.render();
    }

    render() {
        this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
      `);

        this.elem.addEventListener('click', event => {
            if (event.target.closest('.modal__close')) this.close();
        });
    }

    open() {
        document.body.append(this.elem);
        document.body.classList.add('is-modal-open');

        this.keydown = (event) => {
            if (event.code === 'Escape') {
                this.close();
            }
        }
        document.addEventListener('keydown', this.keydown);
    }

    setTitle(title) {
        let modalTitle = this.elem.querySelector('.modal__title');
        modalTitle.textContent = title;
    }

    setBody(node) {
        let modalBody = this.elem.querySelector('.modal__body');
        modalBody.innerHTML = node.outerHTML;
    }

    close() {
        document.body.classList.remove('is-modal-open');
        this.elem.remove();
        document.removeEventListener('keydown', this._escape);
    }


}
