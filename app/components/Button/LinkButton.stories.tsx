import { Meta, StoryFn } from '@storybook/react';
import LinkButton, { LinkButtonProps } from './LinkButton';

const meta: Meta = {
	title: 'LinkButton',
	component: LinkButton,
};

export default meta;

const Template: StoryFn<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	to: '/path',
	children: 'Link Button',
};
