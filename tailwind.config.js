/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'text-theme-primary': '#edfffc',
				'text-theme-secondary': '#81fff4',
				'text-theme-dark': '#003a39',
				'bg-primary': '#0E0E10',
				'bg-theme': '#00ffe1',
				'bg-theme-dark': '#003a39',
			},
			fontFamily: {
				sans: ['Nanum Gothic Coding', 'sans-serif'],
				cabin: ['Cabin', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
