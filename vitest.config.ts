import * as path from 'path';
import * as VitestConfig from 'vitest/config';

export default VitestConfig.defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		setupFiles: ['vitest.setup.ts'],
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'app'),
		},
	},
});
