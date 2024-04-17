import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {
			builder: {
				viteConfigPath: 'vite-sb.config.ts',
			},
		},
	},
	async viteFinal(config) {
		const { mergeConfig } = await import('vite');
		const tsconfigPaths = await import('vite-tsconfig-paths');
		return mergeConfig(config, {
			plugins: [tsconfigPaths],
		});
	},
	docs: {
		autodocs: 'tag',
	},
};
export default config;
