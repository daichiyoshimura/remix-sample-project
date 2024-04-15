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
				'fade-in': 'fade-in 0.3s ease-out   both',
				'fade-out': 'fade-out 0.3s ease-in   both',
			},
			keyframes: {
				'fade-in': {
					'0%': {
						transform: 'translateY(50px)',
						opacity: '0',
					},
					to: {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				'fade-out': {
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
					to: {
						transform: 'translateY(50px)',
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [],
};

export default config;
