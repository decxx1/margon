import { initBrands } from '../brands-init.js';
import { initCollapses } from './collapse.js';
import { initDropdowns } from './dropdown.js';
import { initDrawers } from './drawer.js';

/**
 * Initialize declarative UI behaviors (data-* attributes) for Astro pages.
 */
export function initUi(root = document) {
	initCollapses(root);
	initDropdowns(root);
	initDrawers(root);

	if (
		root.querySelector('[data-animate="hero"]') ||
		root.querySelector('.brands-showcase') ||
		root.querySelector('.brand-story') ||
		root.querySelector('[data-animate="section-header"]')
	) {
		initBrands(root);
	}
}
