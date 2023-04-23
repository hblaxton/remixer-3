import { LitElement, html, css } from 'lit';
import "./remixer-3";


export class RemixerTypes extends LitElement {
    static get tag(){
        return 'remixer-types';
    }

        static get properties(){
        return {
            types: {type: Array},
            backgroundColor: {type: String},
            tvButtons: {type: String},
            border: {type: String},
            textColor: {type: String},
            tvOutline: {type: String},
            cardColor: {type: String},
            
            block1: {type: String},
            block2: {type: String},
            block3: {type: String},
            block4: {type: String},
            block5: {type: String},
            block6: {type: String},
            block7: {type: String},
            
            bottom1: {type: String},
            bottom3: {type: String},
            bottom5: {type: String},
            bottom7: {type: String},
            
            mediaColor: {type: String},
            topName: {type: String},
            name : {type: String},
            nameTitle : {type: String},
            namePlace : {type: String},
            image1: {type: String},
            logo: {type: String},
        }
    }
    constructor() {
        super();
        this.types=[]; 
        this.backgroundColor= 'yellow';
this.tvButtons= 'Blue';
this.border= 'black';
this.textColor= 'white';
this.tvOutline= 'grey';
this.cardColor= 'blue';

this.block1='aquamarine';
this.block2='blue';
this.block3='grey';
this.block4='green';
this.block5='blue';
this.block6= 'purple';
this.block7='pink';

this.bottom1='purple';
//black block
this.bottom3='purple';
//black block
this.bottom5='purple';
//black block
this.bottom7='purple';

this.mediaColor='white';
this.topName= 'Media';
this.name = 'bleh';
this.nameTitle = 'lol';
this.namePlace = 'target';
this.image1 = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
this.logo = 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg';
        }

        
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
        `;
    }
    async updateType() { 
        const adress = new URL('../api/type', import.meta.url).href;
        fetch(adress).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return[];
        })
        .then((data) => {
            this.types = data;

        });
        console.log(data);
        }
        
    render() {
        return html`
        <div class="wrapper">
        ${this.types.map(type => html`
        <div class="item">
        <remixer-3 backgroundColor="${type.backgroundColor}" tvColor="${type.tvButtons}"   ></remixer-3>
        </div>
    `)}
    </div>
        
    `;

        
        }

    }
customElements.define(RemixerTypes.tag, RemixerTypes);