import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryFn } from '@storybook/react';
import { RoomCardList, RoomCardListProps } from '@features';


const meta: Meta = {
	title: 'RoomCardList',
	component: RoomCardList,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<RoomCardListProps> = (args) => (
	<BrowserRouter>
		<RoomCardList {...args} />
	</BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
	rooms: [
		{ id: '1', name: 'Room 1', createdAt: '2024-03-31' },
		{ id: '2', name: 'Room 2', createdAt: '2024-04-01' },
	],
};