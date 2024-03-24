import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				darkslategray: '#2f4f4f',
				darkolivegreen: '#556b2f',
				slategray: '#708090',
				olivedrab: '#6b8e23',
			},
		},
	},
	plugins: [],
} satisfies Config;
