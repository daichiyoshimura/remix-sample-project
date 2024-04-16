import { StoryFn, Meta } from '@storybook/react';
import { ErrorTextList } from '@components';

export default {
	title: 'ErrorTextList',
	component: ErrorTextList,
	tags: ['autodocs'],
} as Meta<typeof ErrorTextList>;

const Template: StoryFn<typeof ErrorTextList> = (args) => <ErrorTextList {...args} />;

export const Default = Template.bind({});
Default.args = {
	textList: ['Error 1', 'Error 2', 'Error 3'],
};
