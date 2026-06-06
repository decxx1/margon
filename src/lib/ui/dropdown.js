/**
 * Click-triggered dropdown panel (Flowbite-compatible dropdown).
 */
export function createDropdown(trigger, panel, options = {}) {
	if (!trigger || !panel) return null;

	const { onToggle } = options;
	let open = false;

	function show() {
		open = true;
		panel.classList.remove('hidden');
		trigger.setAttribute('aria-expanded', 'true');
		onToggle?.(true);
	}

	function hide() {
		open = false;
		panel.classList.add('hidden');
		trigger.setAttribute('aria-expanded', 'false');
		onToggle?.(false);
	}

	function toggle() {
		open ? hide() : show();
	}

	const onTriggerClick = (event) => {
		event.stopPropagation();
		toggle();
	};

	const onDocumentClick = (event) => {
		if (!open) return;
		if (panel.contains(event.target) || trigger.contains(event.target)) return;
		hide();
	};

	const onKeydown = (event) => {
		if (event.key === 'Escape' && open) hide();
	};

	trigger.addEventListener('click', onTriggerClick);
	document.addEventListener('click', onDocumentClick);
	document.addEventListener('keydown', onKeydown);

	trigger.setAttribute('aria-expanded', 'false');
	panel.classList.add('hidden');

	return {
		show,
		hide,
		toggle,
		isOpen: () => open,
		destroy() {
			trigger.removeEventListener('click', onTriggerClick);
			document.removeEventListener('click', onDocumentClick);
			document.removeEventListener('keydown', onKeydown);
		},
	};
}

export function initDropdowns(root = document) {
	const instances = [];

	root.querySelectorAll('[data-dropdown-toggle]').forEach((trigger) => {
		const targetId = trigger.getAttribute('data-dropdown-toggle');
		if (!targetId) return;

		const panel = document.getElementById(targetId);
		if (!panel) return;

		instances.push(createDropdown(trigger, panel));
	});

	return instances;
}
