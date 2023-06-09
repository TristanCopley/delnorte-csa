/** @type {import('tailwindcss').Config} */
export default {
	safeList: ['alert-success', 'alert-info', 'alert-warning', 'alert-error'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		darkTheme: 'garden'
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
