class tuiFormGroup extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: "open" });

		const formGroup = document.createElement("div");

		formGroup.classList.add("form-group");

		const slot = document.createElement("slot");

		formGroup.append(slot);

		const styleContent = `
   .form-group {
     margin-bottom: 10px;
    }
   `;

		const style = document.createElement("style");
		style.textContent = styleContent;

		shadowDom.append(style, formGroup);
	}
}

window.customElements.define("tui-form-group", tuiFormGroup);

class tuiFormLabel extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: "open" });

		const formLabel = document.createElement("label");

		formLabel.classList.add("form-label");

		const slot = document.createElement("slot");

		formLabel.append(slot);

		const styleContent = `
    .form-label {
      font-size: 14px;
      font-weight: 700;
      color: #666;
      display: block;
      margin-bottom: 5px;
      margin-top: 5px;
    }`;

		const style = document.createElement("style");
		style.textContent = styleContent;

		shadowDom.append(style, formLabel);
	}
}

window.customElements.define("tui-form-label", tuiFormLabel);

class tuiInput extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: "open" });

		const input = document.createElement("input");

		input.classList.add("form-control");

		const slot = document.createElement("slot");

		input.append(slot);

		const attr = {
			variant: this.getAttribute("variant"),
			type: this.getAttribute("type"),
		};

		if (attr.type) {
			input.setAttribute("type", attr.type);
		} else {
			input.setAttribute("type", "text");
		}

		switch (attr.variant) {
			case "info":
				input.classList.add("info");
				break;
			case "danger":
				input.classList.add("danger");
				break;
			case "warning":
				input.classList.add("warning");
				break;
			case "success":
				input.classList.add("success");
				break;
			default:
				input.classList.add("info");
				break;
		}

		const styleContent = `
    .form-control {
      appearance: none;
      padding: 10px 5px;
      font-size: 14px;
      line-height: 1.42857143;
      border: 1px solid #e7e9f3;
      border-radius: 4px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      -webkit-transition: border-color ease-in-out.15s,
        -webkit-box-shadow ease-in-out.15s;
      -o-transition: border-color ease-in-out.15s, box-shadow ease-in-out.15s;
      transition: border-color ease-in-out.15s, box-shadow ease-in-out.15s;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-shadow: none;
    }

      .form-control:focus-visible {
        outline-style: none;
        outline-width: 0px;
      }
      
      .form-control:focus {
        border-bottom-width: 2px;
        border-bottom-color: #07c;
      }

      .info:focus {
        border-bottom-color: #07c;
      }
      
      .danger:focus {
        border-bottom-color: #bd271e;
      }
      
      .warning:focus {
        border-bottom-color: #fec514;
      }
      
      .success:focus {
        border-bottom-color: #127271;
      }
    }
    `;

		const style = document.createElement("style");

		style.textContent = styleContent;

		shadowDom.append(style, input);
	}
}

window.customElements.define("tui-form-input", tuiInput);
