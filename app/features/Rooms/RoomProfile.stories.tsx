import { Meta, StoryFn } from '@storybook/react';
import RoomProfile, { RoomProfileProps } from './RoomProfile';

const meta: Meta = {
	title: 'RoomProfile',
	component: RoomProfile,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<RoomProfileProps & { onClick: () => void }> = (args) => (
	<RoomProfile {...args} />
);

export const Default = Template.bind({});
Default.args = {
	id: '1',
	name: 'Room 1',
	createdAt: '2024-03-31',
	onClick: () => console.log('Edit button clicked'),
};
