// ------------------------------
// Modal actions
// ------------------------------

const modalActions = {
	show: (modal) => {
		modal.setAttribute('show', 'true');
	},
	hide: (modal) => {
		modal.removeAttribute('show', 'false');
	},
};

// -------------------------------
// MODAL RECIPE
// -------------------------------

/**
 * @function
 * @name modal
 * @param {string} action - Accion que tiene que realizar el modal de nueva receta | tiene que ser open/close
 */

function modal(action) {
	if (action === 'open') {
		let modal = document.getElementById('modal');
		modalActions.show(modal);
	} else if (action === 'close') {
		let modal = document.getElementById('modal');
		modalActions.hide(modal);
	}
}
