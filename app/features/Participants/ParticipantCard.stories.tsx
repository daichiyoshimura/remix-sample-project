import { Meta, StoryFn } from '@storybook/react';
import { ParticipantCard, ParticipantCardProps } from '@features';

const meta: Meta = {
	title: 'ParticipantCard',
	component: ParticipantCard,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<ParticipantCardProps> = (args) => <ParticipantCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: '1',
	name: 'John Doe',
	part: 'Guest',
};
