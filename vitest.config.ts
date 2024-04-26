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
			'@*': path.resolve(__dirname, 'app/*'),
			'@components': path.resolve(__dirname, 'app/components'),
			'@features': path.resolve(__dirname, 'app/features'),
			'@hooks': path.resolve(__dirname, 'app/hooks'),
			'@util': path.resolve(__dirname, 'app/util'),
			'@server/*': path.resolve(__dirname, 'app/.server/*'),
		},
	},
});
