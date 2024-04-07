import { StoryFn, Meta } from '@storybook/react';
import { TextList } from '@components';

export default {
	title: 'Components/TextList',
	component: TextList,
	tags: ['autodocs'],
} as Meta<typeof TextList>;

const Template: StoryFn<typeof TextList> = (args) => <TextList {...args} />;

export const Default = Template.bind({});
Default.args = {
	textList: ['Error 1', 'Error 2', 'Error 3'],
};
