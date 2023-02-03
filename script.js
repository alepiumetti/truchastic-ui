// ------------------------------
// Modal actions
// ------------------------------

const modalActions = {
	show: (modal) => {
		modal.setAttribute("show", "true");
	},
	hide: (modal) => {
		modal.removeAttribute("show", "false");
	},
};

// -------------------------------
// MODAL FUNCTIONS
// -------------------------------

/**
 * @function
 * @name modal
 * @param {string} action - Accion que tiene que realizar el modal de nueva receta | tiene que ser open/close
 */

function togglemodal(modalID, action) {
	if (action === "open") {
		let modal = document.getElementById(modalID);
		modalActions.show(modal);
	} else if (action === "close") {
		let modal = document.getElementById(modalID);
		modalActions.hide(modal);
	}
}

// -------------------------------
// CARD
// -------------------------------

// CARD WITH TRANSITION

function toggleCard(card_header) {
	let growDiv = card_header.parentNode.querySelector("tui-transition-card");
	console.log(growDiv.clientHeight);
	if (growDiv.clientHeight) {
		growDiv.style.height = 0;
	} else {
		let wrapper = card_header.parentNode.querySelector("tui-card-body");

		console.log(wrapper.clientHeight);

		growDiv.style.height = wrapper.clientHeight + "px";
	}
}

// -------------------------------
// HANDLERS BUTTONS
// -------------------------------
