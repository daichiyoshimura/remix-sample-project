import { Meta, StoryFn } from '@storybook/react';
import { SaveButton, SaveButtonProps } from '@components';

const meta: Meta = {
	title: 'SaveButton',
	component: SaveButton,
	tags: ['autodocs'],
	argTypes: {
		onClick: { action: 'clicked' },
	},
};

export default meta;

const Template: StoryFn<SaveButtonProps> = (args) => <SaveButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	onClick: () => alert('Save button clicked'),
};
