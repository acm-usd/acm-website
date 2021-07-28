const colors = require('tailwindcss/colors');

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const config = {
	mode: 'jit',
	darkMode: false,
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			display: ['Montserrat', 'sans-serif'],
			serif: [
				'Roboto',
				'sans-serif',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont'
			]
		},
		colors: {
			primary: colors.red,
			secondary: colors.orange,
			success: colors.emerald,
			warning: colors.amber,
			error: colors.rose,
			info: colors.teal
		}
	},
	plugins: []
};

module.exports = config;
