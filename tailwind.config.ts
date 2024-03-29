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
		},
	},
	plugins: [],
};

export default config;
