import { Meta, StoryFn } from '@storybook/react';
import Footer from './Footer';

const meta: Meta = {
	title: 'Footer',
	component: Footer,
};

export default meta;

const Template: StoryFn = () => <Footer />;

export const Default = Template.bind({});
