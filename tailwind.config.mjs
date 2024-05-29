/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
            fontFamily: {
                sourceSansPro: ['Source Sans Pro', 'sans-serif'],
            },
        },
		colors: {
			primary: { 
				'50': '#fdf7ef',
				'100': '#fbebd9',
				'200': '#f6d4b2',
				'300': '#efb782',
				'400': '#e88f4f',
				'500': '#e2712d',
				'600': '#da5c23',
				'700': '#b0441e',
				'800': '#8d381f',
				'900': '#712f1d',
				'950': '#3d160d',
			},
			secondary: {
				'50': '#fbf7f1',
				'100': '#f5ebdf',
				'200': '#ead3bd',
				'300': '#ddb694',
				'400': '#ce9169',
				'500': '#c4774b',
				'600': '#b66240',
				'700': '#974f37',
				'800': '#7a4132',
				'900': '#63362b',
				'950': '#351b15',
			},
			body: '#fffdfa',
		},

	},
	plugins: [
		require('flowbite/plugin')
	],
}
