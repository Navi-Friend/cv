/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				CVGray: '#323b4c',
				CVBlue: '#188FA7',
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
			},
			screens: {
				mob: '300px',
			},
		},
	},
	plugins: [],
};
