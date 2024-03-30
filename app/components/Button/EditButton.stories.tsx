import { Meta, StoryFn } from '@storybook/react';
import EditButton, { EditButtonProps } from './EditButton';

const meta: Meta<EditButtonProps> = {
	title: 'EditButton',
	component: EditButton,
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

export default meta;

const Template: StoryFn<EditButtonProps> = (args) => <EditButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => alert('Edit button clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
	onClick: () => alert('Edit button clicked'),
	disabled: true,
};
