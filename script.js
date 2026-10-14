const MODAL = new Set(['gallery']);

function toggleDialog(id) {
	const target = document.getElementById(id);
  	const wasOpen = target.open;

  	document.querySelectorAll('dialog[open]').forEach(d => d.close());

  	if (!wasOpen) {
    	MODAL.has(id) ? target.showModal() : target.show();
  	}
}