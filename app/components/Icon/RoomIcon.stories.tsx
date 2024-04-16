import { Meta, StoryFn } from '@storybook/react';
import { RoomIcon } from '@components';

const meta: Meta = {
	title: 'RoomIcon',
	component: RoomIcon,
	tags: ['autodocs'],
	argTypes: {
		className: { control: 'text' },
	},
};

export default meta;

const Template: StoryFn = (args) => <RoomIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: '',
};
