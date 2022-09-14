// ------------------------------------
// Buttons
// ------------------------------------

// Normal Button

class tuiButton extends HTMLElement {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['variant', 'disabled', 'filled', 'empty'];
	}

	_renderButton() {
		let shadowDom = this.attachShadow({ mode: 'open' });

		let attr = {
			variant: this.getAttribute('variant'),
			disabled: this.getAttribute('disabled'),
			filled: this.getAttribute('filled'),
			empty: this.getAttribute('empty'),
		};

		let classes = 'btn';

		switch (attr.variant) {
			case 'primary':
				classes = classes + ' primary';
				break;
			case 'danger':
				classes = classes + ' danger';
				break;
			case 'warning':
				classes = classes + ' warning';
				break;
			case 'success':
				classes = classes + ' success';
				break;

			default:
				classes = classes + ' primary';
				break;
		}

		if (attr.filled) {
			classes = classes + ' filled';
		}

		if (attr.empty) {
			classes = classes + ' empty';
		}

		let disabled = '';

		if (attr.disabled) {
			disabled = 'disabled';
		}

		shadowDom.innerHTML = `
    <style>
    /* Botones */

    /* Default */
    
    .btn {
      height: inherit;
      border-radius: 4px;
      background-color: #cce4f5;
      font-weight: 900;
      font-size: 1em;
      color: #216eb2;
      padding: 10px 30px;
      cursor: pointer;
      transition: 0.5s;
      text-align: center;
      max-width: 150px;
      border-style: none;
    }
    
    .btn:hover {
      -webkit-transform: translateY(-1px);
      transform: translateY(-1px);
      text-decoration: underline;
    }
    
    /* Primary */
    
    .btn.primary {
      background-color: #cce4f5;
      color: #216eb2;
    }
    
    .btn.primary.filled {
      background-color: #07c;
      color: #fff;
    }
    
    .btn.primary.empty {
      font-weight: bold;
      color: #1971c9;
      background-color: transparent;
    }
    
    .btn.primary.empty:hover {
      text-decoration: underline;
    }
    
    /* Success */
    
    .btn.success {
      background-color: #cdf3f0;
      color: #127271;
    }
    
    .btn.success.filled {
      background-color: #127271;
      color: #000000;
    }
    
    .btn.success.empty {
      color: #127271;
      background-color: transparent;
    }
    
    /* Danger */
    
    .btn.danger {
      background-color: #f2d5d3;
      color: #bd271e;
    }
    
    .btn.danger.filled {
      background-color: #bd271e;
      color: #fff;
    }
    
    .btn.danger.empty {
      color: #bd271e;
      background-color: transparent;
    }
    
    /* Warning */
    
    .btn.warning {
      background-color: #fff3d0;
      color: #83650a;
    }
    
    .btn.warning.filled {
      background-color: #fec514;
      color: #00010b;
    }
    
    .btn.warning.empty {
      color: #83650a;
      background-color: transparent;
    }
    
    /* Disabled */
    
    .btn[disabled] {
      background-color: #7d7d7d;
      color: #f0f0f0;
      cursor: not-allowed;
    }
    
    .btn.empty[disabled] {
      background-color: transparent;
      color: #7d7d7d;
    }
     </style>

     <button class="${classes}" ${disabled}><slot></slot></button>`;
	}

	attributesChangedCallback(name, oldValue, newValue) {
		this._renderButton();
	}

	connectedCallback() {
		this._renderButton();
	}
}

window.customElements.define('tui-button', tuiButton);
