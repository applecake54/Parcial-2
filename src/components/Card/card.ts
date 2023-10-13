export enum Attribute {
    "one" = "one",
    "two" = "two",
}

class Card extends HTMLElement {

    one?: string;
    two?: string;

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        const attrs: Record <Attribute, null> = {
            one: null,
            two: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <div>
            <p>${this.one}</p>
            <img src="${this.two}" alt="" srcset="">
            </div>
            `
        }
    }

}


customElements.define("my-card", Card)
export default Card;