import Animation from "../../components/animation";

export default class Page {
    subElements = {};
    components = {};


    render() {

        const element = document.createElement('div');
        element.innerHTML = this.getTemplate();

        this.element = element.firstElementChild;

        this.subElements = this.getSubElements();
        this.initComponents();
        this.renderComponents();

        return this.element;
    }


    initComponents() {
        const animation = new Animation();

        this.components = {
            animation,
        }
    }

    renderComponents() {
        Object.keys(this.components).forEach(component => {
            console.log(component);
            const root = this.subElements[component];
            const { element } = this.components[component];
            root.append(element);
        })
    }



    getSubElements() {
        const elements = this.element.querySelectorAll('[data-element]')
        for (const item of elements) {
            this.subElements[item.dataset.element] = item;
        }
        return this.subElements;
    }

    removeEventListeners() {
        this.removeEventListeners();
    }

    remove() {
        if (this.element) {
            this.element.remove()
        }
    }

    destroy() {
        this.remove();
        this.element = null;
        this.subElements = null;


        for (const component of Object.values(this.components)) {
            component.destroy();
        }
    }


    getTemplate() {
        return `
        <div class="animations">
        <div class="container" data-element="animation">

        </div>
        </div>
        
        `
    }
}