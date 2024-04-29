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
				'50': '#fff8ed',
				'100': '#feefd6',
				'200': '#fcdaac',
				'300': '#fabf77',
				'400': '#f79a40',
				'500': '#f47d1b',
				'600': '#ec6511',
				'700': '#be4a10',
				'800': '#973a15',
				'900': '#7a3214',
				'950': '#421708',
			},
			body: '#fffdfa',
		},

	},
	plugins: [
		require('flowbite/plugin')
	],
}
