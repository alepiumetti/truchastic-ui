// ------------------------------------
// Text
// ------------------------------------

class tuiText extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: 'open' });

		let attr = {
			type: this.getAttribute('type'),
		};

		shadowDom.innerHTML = `
    <style>
    
     </style>

     <p><slot></slot></p>`;
	}
}

window.customElements.define('tui-text', tuiText);
