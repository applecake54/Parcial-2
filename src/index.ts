import * as components from "./components/export";
import Card, { Attribute } from "./components/Card/card";
import { getCatFact, getCatImg } from "./services/dataFetch";


class AppContainer extends HTMLElement {
   cardElement: Card;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.cardElement = this.ownerDocument.createElement("my-card") as Card;

        const button = this.ownerDocument.createElement("button");
        button.textContent = "Get New Cat Fact and Image";
        button.addEventListener("click", this.updateCatFactAndImage.bind(this));

        this.shadowRoot?.appendChild(this.cardElement);
        this.shadowRoot?.appendChild(button);
    }

    connectedCallback() {
        this.updateCatFactAndImage();
    }

    async updateCatFactAndImage() {
        try {
            const catFact = await getCatFact();
            const catImgData = await getCatImg();

            this.cardElement.setAttribute(Attribute.one, catFact.fact);
            this.cardElement.setAttribute(Attribute.two, catImgData.url);

           
            this.cardElement.render();
        } catch (error) {
            console.log(error);
        }
    }
    render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <my-card one="${this.cardElement.getAttribute(Attribute.one)}" two="${this.cardElement.getAttribute(Attribute.two)}"></my-card>
        `;
    }
}
}


customElements.define("app-container", AppContainer);

