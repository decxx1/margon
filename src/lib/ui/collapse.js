/**
 * Toggle visibility of a target element (Flowbite-compatible collapse).
 * Supports [data-collapse-toggle="targetId"] in Astro and imperative use in Vue.
 */
export function createCollapse(trigger, target, options = {}) {
	if (!trigger || !target) return null;

	const { onToggle } = options;

	function syncTriggerIcons(open) {
		const icons = trigger.querySelectorAll('svg');
		if (icons.length < 2) return;
		icons[0].classList.toggle('hidden', open);
		icons[1].classList.toggle('hidden', !open);
	}

	function isOpen() {
		return !target.classList.contains('hidden');
	}

	function show() {
		target.classList.remove('hidden');
		trigger.setAttribute('aria-expanded', 'true');
		syncTriggerIcons(true);
		onToggle?.(true);
	}

	function hide() {
		target.classList.add('hidden');
		trigger.setAttribute('aria-expanded', 'false');
		syncTriggerIcons(false);
		onToggle?.(false);
	}

	function toggle() {
		isOpen() ? hide() : show();
	}

	const onClick = (event) => {
		event.preventDefault();
		toggle();
	};

	trigger.addEventListener('click', onClick);

	if (isOpen()) {
		trigger.setAttribute('aria-expanded', 'true');
		syncTriggerIcons(true);
	} else {
		trigger.setAttribute('aria-expanded', 'false');
		syncTriggerIcons(false);
	}

	return {
		show,
		hide,
		toggle,
		isOpen,
		destroy() {
			trigger.removeEventListener('click', onClick);
		},
	};
}

export function initCollapses(root = document) {
	const instances = [];

	root.querySelectorAll('[data-collapse-toggle]').forEach((trigger) => {
		const targetId = trigger.getAttribute('data-collapse-toggle');
		if (!targetId) return;

		const target = document.getElementById(targetId);
		if (!target) return;

		instances.push(createCollapse(trigger, target));
	});

	return instances;
}
