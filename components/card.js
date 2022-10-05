class TuiCard extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: 'open' });

		const card = document.createElement('div');

		card.classList.add('card');
		card.classList.add('with-transition');

		const slot = document.createElement('slot');

		card.append(slot);

		const styleContent = `.card {
      margin: 10px;
      padding: 5px;
      border-radius: 4px;
      position: relative;
      background-color: #fff;
      transition: border-color.55s;
      transition: box-shadow.55s;
      border: 1px solid rgba(0, 0, 0, 0.13);
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
    }
    
    .card:hover {
      transition: border-color.55s;
      transition: box-shadow.55s;
      border-radius: 4px;
      border-color: var(--mainColor);
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
    }`;

		const style = document.createElement('style');

		style.textContent = styleContent;

		shadowDom.append(style, card);
	}
}

window.customElements.define('tui-card', TuiCard);

class TuiCardHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: 'open' });

		const card_header = document.createElement('div');

		card_header.classList.add('card-header');

		const slot = document.createElement('slot');

		card_header.append(slot);

		const styleContent = `
    .card-header {
      margin: 1px;
      padding: 0px 10px;
      border-bottom: 2px solid var(--mainColor);
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      text-transform: uppercase;
      cursor: pointer;
    }
    `;

		const style = document.createElement('style');

		style.textContent = styleContent;

		shadowDom.append(style, card_header);
	}
}

window.customElements.define('tui-card-header', TuiCardHeader);

class TuiTransitionCard extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: 'open' });

		const transition_card = document.createElement('div');

		transition_card.classList.add('transition-card-body');

		const slot = document.createElement('slot');

		transition_card.append(slot);

		const styleContent = `
    .transition-card-body {
      -moz-transition: height 0.5s;
      -ms-transition: height 0.5s;
      -o-transition: height 0.5s;
      -webkit-transition: height 0.5s;
      transition: height 0.5s;
      height: 0;
      overflow: hidden;
    }`;

		const style = document.createElement('style');

		style.textContent = styleContent;

		shadowDom.append(style, transition_card);
	}
}

window.customElements.define('tui-transition-card', TuiTransitionCard);

class TuiCardBody extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		let shadowDom = this.attachShadow({ mode: 'open' });

		const card_body = document.createElement('div');

		card_body.classList.add('card-body');

		const slot = document.createElement('slot');

		card_body.append(slot);

		const styleContent = `.card-body {
    display: flex;
    flex-direction: column;
    padding: 5px 15px;
  }`;

		const style = document.createElement('style');
		style.append(styleContent);

		shadowDom.append(style, card_body);
	}
}

window.customElements.define('tui-card-body', TuiCardBody);

{
	/* <div class="card with-transition hide" id="counter">

        <div class="card-header coll">
          <h3 class="titNom" id="titulo_WM2">Conteo Piezas</h3>
          <h3 class="titNum" id="estado_WM2">
            <div class="circle-active hide" />
          </h3>

        </div>
        <div class="transition-card-body">
          <div class="card-body">
            <br>
            <label for="pieceSelect">Elija una pieza:</label>
            <select name="selectpieza" id="pieceSelect">
            </select>
            <p><span> Peso Pieza: </span><span id="pesoPieza" class="ingNumLive"></span></p>
            <p><span> Conteo piezas: </span><span id="pesoContador" class="ingNumLive"></span></p>
            <p><span> Peso Total: </span><span id="pesoTotal" class="ingNumLive"></span></p>
            <div class="card-footer">
              <div class="col-6"></div>
              <div class="col-6" style="justify-content: space-around;">
                <button id="btn-tara-conteo" onClick="httpRequest.setTara()" class="btn primary">Tara</button>
                <button id="btn-cero-conteo" onClick="httpRequest.setCero()" class="btn primary filled">Cero</button>
                <button id="btn-contar-conteo" onClick="initCounter()" class="btn success">Contar</button>
              </div>
              <!-- <input id="calibrationValue" placeholder="Peso Calibracion" class="form-control weight" type="number"><br></br>
              <button onClick="setCalib()" class="button solid">Calibrar</button> -->
            </div>
          </div>
        </div>
      </div> */
}
