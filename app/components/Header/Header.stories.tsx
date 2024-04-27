import { Meta, StoryFn } from '@storybook/react';
import { Header } from '@components';

const meta: Meta = {
	title: 'Header',
	component: Header,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn = () => <Header />;

export const Default = Template.bind({});
