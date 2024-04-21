/** @type {import('tailwindcss').Config} */
const hocusPlugin = require('tailwindcss-hocus')
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#c9dfdb',
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
	plugins: [hocusPlugin],
}
