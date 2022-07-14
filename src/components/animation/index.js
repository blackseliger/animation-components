

const BACKEND_URL_L = 'http://localhost:7070/';
const BACKEND_URL_H = 'https://hp34.herokuapp.com/';
export default class Animation {
    subElements = {};
    wrapper = null;

    onClick = async (event) => {
        const toggleCollapse = event.target.closest("[data-element=toggleCollapse]");


        if (toggleCollapse) {
            const container = this.element.querySelector('.col-cont');
            container.classList.toggle('collapse__container_hide');
        }

    }


    constructor() {
        this.render();
    }

    render() {
        const wrapper = document.createElement('div');

        wrapper.innerHTML = this.getTemplate();
        this.element = wrapper.firstElementChild;

        this.subElements = this.getSubElements();
        this.initEventListeners();
    }

    initEventListeners() {
        this.element.addEventListener('click', this.onClick);
    }

    removeEventListeners() {
        document.removeEventListener('click', this.onClick);

    }


    getSubElements() {
        const elements = this.element.querySelectorAll('[data-element]')
        for (const item of elements) {
            this.subElements[item.dataset.element] = item;
        }
        return this.subElements;
    }


    getTemplate() {
        return `
        <div class="collapse" data-element="collapse">
        <button  class="button button_primary" data-element="toggleCollapse">
            Primary
         </button>
         <div class="collapse__container collapse__container_hide col-cont">
            heheheheheheheheheheheheheheheheheheh
         </div>
    </div>

        `
    }


    remove() {
        if (this.element) {
            this.element.remove();
        }
    }

    destroy() {
        this.remove();
        this.element = null;
        this.subElements = null;
    }


}