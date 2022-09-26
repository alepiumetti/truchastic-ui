// ------------------------------------
// Text
// ------------------------------------

class tuiCode extends HTMLElement {
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
      .code{
        background-color:#001626;
        padding:5px;
        font-family: monospace;
        font-size:10pt;
        color:#c5cddb;
        border-radius: 5px;
        display:inhereit;
      }

     </style>

     <div class="code"><slot></slot></div>`;
	}
}

window.customElements.define('tui-code', tuiCode);
class tuiCodeLine extends HTMLElement {
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
      .code{
        background-color:#001626;
        padding:5px;
        font-family: monospace;
        font-size:10pt;
        color:#c5cddb;
        border-radius: 5px;
        display:inhereit;
      }

     </style>

     <code class="code"><slot></slot></code>`;
	}
}

window.customElements.define('tui-code-line', tuiCodeLine);
