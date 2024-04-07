import { StoryFn, Meta } from '@storybook/react';
import { ErrorText } from '@components';

export default {
	title: 'Components/ErrorText',
	component: ErrorText,
	tags: ['autodocs'],
} as Meta<typeof ErrorText>;

const Template: StoryFn<typeof ErrorText> = (args) => <ErrorText {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: 'This is an error message',
};
