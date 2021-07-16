/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const config = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};

module.exports = config;
