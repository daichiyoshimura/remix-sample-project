import { Meta, StoryFn } from '@storybook/react';
import { EditIcon } from '@components';

const meta: Meta = {
	title: 'EditIcon',
	component: EditIcon,
	tags: ['autodocs'],
	argTypes: {
		className: { control: 'text' },
	},
};

export default meta;

const Template: StoryFn = (args) => <EditIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: '',
};
