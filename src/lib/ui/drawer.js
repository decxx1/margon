const drawerInstances = new Map();

function getPlacement(drawerEl) {
	return drawerEl.dataset.drawerPlacement === 'right' ? 'right' : 'left';
}

/**
 * Side drawer with backdrop (Flowbite-compatible drawer).
 * Toggle buttons use [data-drawer-target="drawerId"].
 */
export function createDrawer(drawerEl, options = {}) {
	if (!drawerEl) return null;

	const placement = options.placement || getPlacement(drawerEl);
	let open = false;
	let backdrop = null;

	const hiddenClass = placement === 'right' ? 'translate-x-full' : '-translate-x-full';

	function ensureHiddenClass() {
		if (!open) drawerEl.classList.add(hiddenClass);
	}

	function createBackdrop() {
		backdrop = document.createElement('div');
		backdrop.className = 'ui-drawer-backdrop fixed inset-0 z-30 bg-gray-900/50';
		backdrop.setAttribute('aria-hidden', 'true');
		backdrop.addEventListener('click', hide);
		document.body.appendChild(backdrop);
	}

	function removeBackdrop() {
		backdrop?.remove();
		backdrop = null;
	}

	function show() {
		open = true;
		drawerEl.classList.remove(hiddenClass);
		createBackdrop();
		document.body.classList.add('overflow-hidden');
		drawerEl.setAttribute('aria-hidden', 'false');
	}

	function hide() {
		open = false;
		drawerEl.classList.add(hiddenClass);
		removeBackdrop();
		document.body.classList.remove('overflow-hidden');
		drawerEl.setAttribute('aria-hidden', 'true');
	}

	function toggle() {
		open ? hide() : show();
	}

	const onKeydown = (event) => {
		if (event.key === 'Escape' && open) hide();
	};

	document.addEventListener('keydown', onKeydown);
	ensureHiddenClass();
	drawerEl.setAttribute('aria-hidden', 'true');

	const instance = {
		show,
		hide,
		toggle,
		isOpen: () => open,
		destroy() {
			document.removeEventListener('keydown', onKeydown);
			removeBackdrop();
			drawerInstances.delete(drawerEl.id);
		},
	};

	if (drawerEl.id) drawerInstances.set(drawerEl.id, instance);

	return instance;
}

export function getDrawer(id) {
	return drawerInstances.get(id) ?? null;
}

export function getOrCreateDrawer(drawerEl, options = {}) {
	if (drawerEl?.id && drawerInstances.has(drawerEl.id)) {
		return drawerInstances.get(drawerEl.id);
	}
	return createDrawer(drawerEl, options);
}

export function initDrawers(root = document) {
	root.querySelectorAll('[data-drawer]').forEach((drawerEl) => {
		getOrCreateDrawer(drawerEl);
	});

	const onClick = (event) => {
		const trigger = event.target.closest('[data-drawer-target]');
		if (!trigger) return;

		const drawerId = trigger.getAttribute('data-drawer-target');
		if (!drawerId) return;

		const drawerEl = document.getElementById(drawerId);
		if (!drawerEl) return;

		event.preventDefault();
		getOrCreateDrawer(drawerEl)?.toggle();
	};

	root.addEventListener('click', onClick);

	return {
		destroy() {
			root.removeEventListener('click', onClick);
		},
	};
}
