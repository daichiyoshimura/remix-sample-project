import { Meta, StoryFn } from '@storybook/react';
import { createRemixStub } from '@remix-run/testing';
import { LinkButton, LinkButtonProps } from '@components';

const meta: Meta = {
	title: 'LinkButton',
	component: LinkButton,
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			const RemixStub = createRemixStub([
				{
					path: '*',
					action: () => ({ redirect: '/' }),
					loader: () => ({ redirect: '/' }),
					Component: () => <Story />,
				},
			]);
			return <RemixStub />;
		},
	],
	args: {
		children: "I'm a link",
		to: '/',
	},
};

export default meta;

const Template: StoryFn<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	to: '/',
	children: 'LinkButton',
};
