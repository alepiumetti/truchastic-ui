class TuiModal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this._modal;

		const modal = document.createElement("div");

		modal.classList.add("modal");

		const modal_content = document.createElement("div");

		modal_content.classList.add("modal-content");

		const slot = document.createElement("slot");

		modal_content.append(slot);
		modal.append(modal_content);

		const styleContent = `
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {

  }

  `;

		const style = document.createElement("style");

		style.textContent = styleContent;

		this.shadowRoot.append(style, modal);
	}

	static get observedAttributes() {
		return ["show"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "show" && (newValue === "true" || newValue === true)) {
			this._modal.style.display = "block";
		} else {
			this._modal.style.display = "none";
		}
	}

	connectedCallback() {
		this._modal = this.shadowRoot.querySelector(".modal");
	}

	disconnectedCallback() {}
}

window.customElements.define("tui-modal", TuiModal);

class TuiModalHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: "open" });

		const styleContent = `
    .modal-header {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content:space-between;
    }

    @media (max-width: 700px) {

    }
    `;

		const style = document.createElement("style");

		style.textContent = styleContent;

		const modal_header = document.createElement("div");

		modal_header.classList.add("modal-header");

		const slot = document.createElement("slot");

		modal_header.append(slot);

		shadowDom.append(style, modal_header);
	}
}

window.customElements.define("tui-modal-header", TuiModalHeader);

class TuiModalTitle extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: "open" });

		const styleContent = `
    .modal-title {
      font-size: larger;
      font-weight: bold;
    }

    @media (max-width: 700px) {

    }
    `;

		const style = document.createElement("style");

		style.textContent = styleContent;

		const modal_title = document.createElement("div");

		modal_title.classList.add("modal-title");

		const slot = document.createElement("slot");

		modal_title.append(slot);

		shadowDom.append(style, modal_title);
	}
}

window.customElements.define("tui-modal-title", TuiModalTitle);

class TuiModalBody extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: "open" });

		const styleContent = `
    .modal-body {
      padding: 5px 0px;
    }

    @media (max-width: 700px) {

    }
    `;

		const style = document.createElement("style");

		style.textContent = styleContent;

		const modal_body = document.createElement("div");

		modal_body.classList.add("modal-body");

		const slot = document.createElement("slot");

		modal_body.append(slot);

		shadowDom.append(style, modal_body);
	}
}

window.customElements.define("tui-modal-body", TuiModalBody);

class TuiModalFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: "open" });

		const styleContent = `.modal-footer {
      padding: 5px 0px;
      display: flex;
      flex-direction: row;
    }
    
    @media (max-width: 700px) {
      .modal-footer {
        flex-direction: column;
      }
    }
    
    
    `;

		const style = document.createElement("style");

		style.textContent = styleContent;

		const modal_footer = document.createElement("div");

		modal_footer.classList.add("modal-footer");

		const slot = document.createElement("slot");

		modal_footer.append(slot);

		shadowDom.append(modal_footer);
	}
}

window.customElements.define("tui-modal-footer", TuiModalFooter);

{
	/* <div id="modal-nueva-receta" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
          Nueva receta
        </div>
        <div class="modal-close">
          <!-- Tiene estilo en linea porque no estaba tomando el estilo de CSS -->
          <span id="close-modal" style="cursor:pointer" onclick="modalRecipe('close')">
            ×
          </span>
        </div>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for='nombreDeReceta'>Nombre de Receta</label>
          <input id="nombreDeReceta" class="form-control info-input full-width" type="text">
        </div>
      </div>
      <table class="no-border">

        <tr>
          <th style="width: 10%;">
            Cantidad
          </th>

          <th style="width:60% ;">
            Descripcion
          </th>
          <th colspan="2" style="width: 30%;">
            Acciones
          </th>
        </tr>
        <tr class="row-ingrediente" id="row-ingrediente-0">
          <td>
            <input id="cantidadIngrediente-0" class="form-control info-input full-width cant-ingrediente" type="number">
          </td>
          <td>
            <input id="descripcionIngrediente-0" class="form-control info-input full-width desc-ingrediente"
              type="text">
          </td>
          <td>
            <button class="btn primary agregar-ingrediente" id="btn-agregar-ingrediente-0">+</button>
          </td>
          <td>
            <button class="btn danger hide borrar-ingrediente" id="btn-borrar-ingrediente-0">-
            </button>
          </td>
        </tr>

      </table>

      <div class="modal-footer">
        <div class="col-4"></div>
        <div class="col-4"></div>
        <div class="col-4" style=" justify-content: space-around;">
          <button class="btn danger filled full-width">Cancelar</button>
          <div style="width: 15px;"></div> <!-- Spacer -->
          <button class="btn primary full-width">Crear</button>
        </div>
      </div>
    </div>

  </div> */
}
