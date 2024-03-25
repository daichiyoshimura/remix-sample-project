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
			fontSize: {
				large: '1.25rem',
			},
		},
	},
	plugins: [],
	purge: {
		content: ['./app/**/*.{js,jsx,ts,tsx}'],
		safelist: ['app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
	},
} satisfies Config;
