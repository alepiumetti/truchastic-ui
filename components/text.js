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
        background-color:#cacaca;
        padding:5px;
        font-family: monospace;
        color:black;
        border-radius: 5px;
        display:inhereit;
      }

     </style>

     <code class="code"><slot></slot></code>`;
	}
}

window.customElements.define('tui-code-line', tuiCode);
