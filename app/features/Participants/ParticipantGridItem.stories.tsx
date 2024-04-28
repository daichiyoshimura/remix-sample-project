import { Meta, StoryFn } from '@storybook/react';
import { ParticipantGridItem, ParticipantGridItemProps } from '@features';

const meta: Meta = {
	title: 'ParticipantCard',
	component: ParticipantGridItem,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<ParticipantGridItemProps> = (args) => <ParticipantGridItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: '1',
	name: 'John Doe',
};
