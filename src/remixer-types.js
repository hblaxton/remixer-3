import { LitElement, html, css } from 'lit';
import "./remixer-3.js";


export class RemixerTypes extends LitElement {
    static get tag(){
        return 'remixer-types';
    }

        static get properties(){
        return {
            types: {type: Array},
            backgroundColor: {type: String},
            tvButtons: {type: String},
            border1: {type: String},
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
        this.border1= 'black';
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
        this.logo = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
        this.image1 = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
        this.updateType();
      }

        
    static get styles() {
        return css`
        :host {
            display: block;
        }
        
        .item {
            display: inline-flex;
        }
        `;
    }
    updateType() { 
        const address = new URL('../assets/type.json', import.meta.url).href;
       fetch (address).then((response) => { 
        if (response.ok){
              return response.json()
        }
        return [];
         })
         .then((data) => {
                this.types = data;
                console.log(data);
            });


       }
    
      

        
    render() {
        return html`
        <div class="wrapper">
        ${this.types.map(type => html`
        <div class="item">
        <remixer-3 
        backgroundColor="${type.backgroundColor}"
        tvButtons="${type.tvButtons}"
        border1="${type.border1}"
        textColor="${type.textColor}"
        tvOutline="${type.tvOutline}"
        cardColor="${type.cardColor}"
        block1="${type.block1}"
        block2="${type.block2}"
        block3="${type.block3}"
        block4="${type.block4}"
        block5="${type.block5}"
        block6="${type.block6}"
        block7="${type.block7}"
        bottom1="${type.bottom1}"
        bottom3="${type.bottom3}"
        bottom5="${type.bottom5}"
        bottom7="${type.bottom7}"
        mediaColor="${type.mediaColor}"
        topName="${type.topName}"
        name="${type.name}"
        nameTitle="${type.nameTitle}"
        namePlace="${type.namePlace}"
        image1="${type.image1}"
        logo="${type.logo}"
        ></remixer-3>
        </div>
    `)}
    </div>
        
    `;

        
        }

    }
customElements.define(RemixerTypes.tag, RemixerTypes);