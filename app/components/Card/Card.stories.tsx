import { Meta, StoryFn } from '@storybook/react';
import { Card, CardProps } from '@components';

const meta: Meta = {
	title: 'Card',
	component: Card,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: <div>This is a default card</div>,
};
