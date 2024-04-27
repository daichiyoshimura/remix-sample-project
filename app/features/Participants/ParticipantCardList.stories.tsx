import { Meta, StoryFn } from '@storybook/react';
import { ParticipantCardList, ParticipantCardListProps } from '@features';

const meta: Meta = {
	title: 'ParticipantCardList',
	component: ParticipantCardList,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<ParticipantCardListProps> = (args) => <ParticipantCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
	participants: [
		{ id: '1', name: 'John Doe' },
		{ id: '2', name: 'Jane Smith' },
	],
};
