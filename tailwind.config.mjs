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
					'50': '#fdf6ef',
					'100': '#faeada',
					'200': '#f4d2b4',
					'300': '#efbb90',
					'400': '#e58b52',
					'500': '#df6e30',
					'600': '#d05626',
					'700': '#ad4221',
					'800': '#8a3622',
					'900': '#702e1e',
					'950': '#3c150e',
				},
				body: '#fffdfa',
			},
        },
	},
	plugins: [
		require('flowbite/plugin')
	],
}
