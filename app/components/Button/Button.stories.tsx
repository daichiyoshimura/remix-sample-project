import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '@components';

const meta: Meta<ButtonProps> = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Default Button',
};

export const Safe = Template.bind({});
Safe.args = {
	children: 'Safe Button',
	color: 'safe',
};

export const Caution = Template.bind({});
Caution.args = {
	children: 'Caution Button',
	color: 'caution',
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Disabled Button',
	disabled: true,
};
