import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				darkslategray: '#2f4f4f',
			},
		},
	},
	plugins: [],
} satisfies Config;

