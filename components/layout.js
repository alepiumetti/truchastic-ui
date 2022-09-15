// Container

class tuiContainer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// Crea Shadow DOM

		let shadowDom = this.attachShadow({ mode: 'open' });

		// Crea componentes

		const slot = document.createElement('slot');

		const container = document.createElement('div');

		container.appendChild(slot);

		let attr = {
			p: parseInt(this.getAttribute('p')),
			padding: parseInt(this.getAttribute('padding')),
			paddingTop: parseInt(this.getAttribute('paddingTop')),
			pt: parseInt(this.getAttribute('pt')),
			paddingBottom: parseInt(this.getAttribute('paddingBottom')),
			pb: parseInt(this.getAttribute('pb')),
			paddingRight: parseInt(this.getAttribute('paddingRight')),
			pr: parseInt(this.getAttribute('pr')),
			paddingLeft: parseInt(this.getAttribute('paddingLeft')),
			pl: parseInt(this.getAttribute('pl')),
			w: this.getAttribute('w'),
			width: this.getAttribute('width'),
			display: this.getAttribute('display'),
			justifyContent: this.getAttribute('justifyContent'),
			textAlign: this.getAttribute('textAlign'),
		};

		// Padding

		if (!isNaN(attr.p) || !isNaN(attr.padding)) {
			if (attr.p >= 0) {
				container.style.padding = attr.p + 'px';
			}

			if (attr.padding >= 0) {
				container.style.padding = attr.padding + 'px';
			}
		}

		if (!isNaN(attr.pt) || !isNaN(attr.paddingTop)) {
			if (attr.pt >= 0) {
				container.style.paddingTop = attr.pt + 'px';
			}

			if (attr.paddingTop >= 0) {
				container.style.paddingTop = attr.paddingTop + 'px';
			}
		}

		if (!isNaN(attr.pb) || !isNaN(attr.paddingBottom)) {
			if (attr.pb >= 0) {
				container.style.paddingBottom = attr.pb + 'px';
			}

			if (attr.paddingBottom >= 0) {
				container.style.paddingBottom = attr.paddingBottom + 'px';
			}
		}

		if (!isNaN(attr.pr) || !isNaN(attr.paddingRight)) {
			if (attr.pr >= 0) {
				container.style.paddingRight = attr.pr + 'px';
			}

			if (attr.paddingRight >= 0) {
				container.style.paddingRight = attr.paddingRight + 'px';
			}
		}

		if (!isNaN(attr.pl) || !isNaN(attr.paddingLeft)) {
			if (attr.pl >= 0) {
				container.style.paddingLeft = attr.pl + 'px';
			}

			if (attr.paddingLeft >= 0) {
				container.style.paddingLeft = attr.paddingLeft + 'px';
			}
		}

		// Width

		if (attr.w) {
			if (attr.w.match(/[.0-9]/)) {
				container.style.width = attr.w + 'px';
			}

			if (attr.w.match(/[0-9]+%/)) {
				container.style.width = attr.w;
			}
		}

		if (attr.width) {
			if (attr.width.match(/[.0-9]/)) {
				container.style.width = attr.width + 'px';
			}

			if (attr.width.match(/[0-9]+%/)) {
				container.style.width = attr.width;
			}
		}

		if (attr.justifyContent) {
			switch (attr.justifyContent) {
				case 'space-around':
					container.style.justifyContent = 'space-around';
					break;
				case 'space-between':
					container.style.justifyContent = 'space-between';
					break;
				case 'center':
					container.style.justifyContent = 'center';
					break;
				case 'flex-start':
					container.style.justifyContent = 'flex-start';
					break;
				case 'flex-end':
					container.style.justifyContent = 'flex-end';
					break;
				case 'inherit':
					container.style.justifyContent = 'inherit';
					break;
				case 'initial':
					container.style.justifyContent = 'initial';
					break;
				case 'unset':
					container.style.justifyContent = 'unset';
					break;
				default:
					break;
			}
		}

		if (attr.textAlign) {
			container.style.textAlign = attr.textAlign;
		}

		container.style.display = 'inhereit';

		shadowDom.append(container);
	}
}

window.customElements.define('tui-container', tuiContainer);

// HStack

class tuiHstack extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: 'open' });

		const slot = document.createElement('slot');

		const container = document.createElement('div');

		container.appendChild(slot);

		let attr = {
			p: parseInt(this.getAttribute('p')),
			padding: parseInt(this.getAttribute('padding')),
			paddingTop: parseInt(this.getAttribute('paddingTop')),
			pt: parseInt(this.getAttribute('pt')),
			paddingBottom: parseInt(this.getAttribute('paddingBottom')),
			pb: parseInt(this.getAttribute('pb')),
			paddingRight: parseInt(this.getAttribute('paddingRight')),
			pr: parseInt(this.getAttribute('pr')),
			paddingLeft: parseInt(this.getAttribute('paddingLeft')),
			pl: parseInt(this.getAttribute('pl')),
			w: this.getAttribute('w'),
			width: this.getAttribute('width'),
			justifyContent: this.getAttribute('justifyContent'),
			textAlign: this.getAttribute('textAlign'),
		};

		// Padding

		if (!isNaN(attr.p) || !isNaN(attr.padding)) {
			if (attr.p >= 0) {
				container.style.padding = attr.p + 'px';
			}

			if (attr.padding >= 0) {
				container.style.padding = attr.padding + 'px';
			}
		}

		if (!isNaN(attr.pt) || !isNaN(attr.paddingTop)) {
			if (attr.pt >= 0) {
				container.style.paddingTop = attr.pt + 'px';
			}

			if (attr.paddingTop >= 0) {
				container.style.paddingTop = attr.paddingTop + 'px';
			}
		}

		if (!isNaN(attr.pb) || !isNaN(attr.paddingBottom)) {
			if (attr.pb >= 0) {
				container.style.paddingBottom = attr.pb + 'px';
			}

			if (attr.paddingBottom >= 0) {
				container.style.paddingBottom = attr.paddingBottom + 'px';
			}
		}

		if (!isNaN(attr.pr) || !isNaN(attr.paddingRight)) {
			if (attr.pr >= 0) {
				container.style.paddingRight = attr.pr + 'px';
			}

			if (attr.paddingRight >= 0) {
				container.style.paddingRight = attr.paddingRight + 'px';
			}
		}

		if (!isNaN(attr.pl) || !isNaN(attr.paddingLeft)) {
			if (attr.pl >= 0) {
				container.style.paddingLeft = attr.pl + 'px';
			}

			if (attr.paddingLeft >= 0) {
				container.style.paddingLeft = attr.paddingLeft + 'px';
			}
		}

		// Width

		if (attr.w) {
			if (attr.w.match(/[.0-9]/)) {
				container.style.width = attr.w + 'px';
			}

			if (attr.w.match(/[0-9]+%/)) {
				container.style.width = attr.w;
			}
		}

		if (attr.width) {
			if (attr.width.match(/[.0-9]/)) {
				container.style.width = attr.width + 'px';
			}

			if (attr.width.match(/[0-9]+%/)) {
				container.style.width = attr.width;
			}
		}

		container.style.display = 'flex';
		container.style.flexDirection = 'row';

		if (attr.justifyContent) {
			switch (attr.justifyContent) {
				case 'space-around':
					container.style.justifyContent = 'space-around';
					break;
				case 'space-between':
					container.style.justifyContent = 'space-between';
					break;
				case 'center':
					container.style.justifyContent = 'center';
					break;
				case 'flex-start':
					container.style.justifyContent = 'flex-start';
					break;
				case 'flex-end':
					container.style.justifyContent = 'flex-end';
					break;
				case 'inherit':
					container.style.justifyContent = 'inherit';
					break;
				case 'initial':
					container.style.justifyContent = 'initial';
					break;
				case 'unset':
					container.style.justifyContent = 'unset';
					break;
				default:
					break;
			}
		}

		if (attr.textAlign) {
			container.style.textAlign = attr.textAlign;
		}

		shadowDom.append(container);
	}
}

window.customElements.define('tui-hstack', tuiHstack);
