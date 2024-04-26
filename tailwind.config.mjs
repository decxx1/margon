/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {},
		colors: {
			primary: { 
				'50': '#fff3f1',
				'100': '#ffe4e0',
				'200': '#ffcec7',
				'300': '#ffaca0',
				'400': '#ff7d69',
				'500': '#f9533a',
				'600': '#e7361b',
				'700': '#c22a13',
				'800': '#ae2915',
				'900': '#852517',
				'950': '#490f06',
			},
			background: '#fffcfb',
		  }
	},
	plugins: [
		require('flowbite/plugin')
	],
}
