import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from './Header';

const meta: Meta = {
	title: 'Header',
	component: Header,
};

export default meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
	currentPageTitle: 'Sample Page',
};
