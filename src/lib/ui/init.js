import { initCollapses } from './collapse.js';
import { initDropdowns } from './dropdown.js';
import { initDrawers } from './drawer.js';

/**
 * Initialize declarative UI behaviors (data-* attributes) for Astro pages.
 */
export function initUi(root = document) {
	initCollapses(root);
	initDropdowns(root);
	return initDrawers(root);
}
