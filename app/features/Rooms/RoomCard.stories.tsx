import { Meta, StoryFn } from '@storybook/react';
import RoomCard, { RoomCardProps } from './RoomCard';

const meta: Meta = {
	title: 'RoomCard',
	component: RoomCard,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<RoomCardProps> = (args) => <RoomCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: '123',
	name: 'Test Room',
	createdAt: '2024-03-31',
};
