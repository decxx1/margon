import { brandPalette } from './brand-palette.js';

/** Líneas del catálogo — deben coincidir con `category` en products.json */
export const catalogLines = [
	{
		category: 'Línea Salados',
		brand: 'sabores',
		label: 'Línea Salados',
		shortLabel: 'Salados',
		logo: '/images/logos/sabores_del_sol.svg',
	},
	{
		category: 'Línea Dulces, Panadería y Repostería',
		brand: 'aral',
		label: 'Línea Dulces, Panadería y Repostería',
		shortLabel: 'Dulces & Repostería',
		logo: '/images/logos/aral_azul.svg',
	},
	{
		category: 'Línea Golosinas',
		brand: 'aralito',
		label: 'Línea Golosinas',
		shortLabel: 'Golosinas',
		logo: '/images/logos/aralito.svg',
	},
	{
		category: 'Línea Cócteles',
		brand: 'viejo-minero',
		label: 'Línea Cócteles',
		shortLabel: 'Cócteles',
		logo: '/images/logos/viejo-minero-nuevo.webp',
	},
	{
		category: 'Línea Salsas y Aderezos',
		brand: 'condimax',
		label: 'Línea Salsas y Aderezos',
		shortLabel: 'Salsas & Aderezos',
		logo: '/images/logos/condimax.webp',
	},
];

export function getLineByCategory(category) {
	return catalogLines.find((line) => line.category === category);
}

export function getBrandPaletteByCategory(category) {
	const line = getLineByCategory(category);
	return line ? brandPalette[line.brand] : null;
}
