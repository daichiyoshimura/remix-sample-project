import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				darkslategray: '#2f4f4f',
				darkolivegreen: '#556b2f',
				slategray: '#708090',
				olivedrab: '#6b8e23',
				primary: '#2f4f4f',
				secondary: '#708090',
				backgroud: '#DCDCDC',
			},
			fontSize: {
				large: '1.25rem',
			},
			animation: {
				'fade-in': 'fade-in 0.3s ease-in',
				'fade-out': 'fade-out 0.3s ease-out',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: '0',
					},
					to: {
						opacity: '1',
					},
				},
				'fade-out': {
					from: {
						opacity: '1',
					},
					to: {
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [],
};

export default config;
