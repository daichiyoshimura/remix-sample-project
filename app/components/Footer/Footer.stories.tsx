import { Meta, StoryFn } from '@storybook/react';
import { Footer } from '@components';

const meta: Meta = {
	title: 'Footer',
	component: Footer,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn = () => <Footer />;

export const Default = Template.bind({});
