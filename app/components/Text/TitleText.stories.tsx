import { Meta, StoryFn } from '@storybook/react';
import { TitleText, TitleTextProps } from '@components';

const meta: Meta = {
	title: 'ModalTitle',
	component: TitleText,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<TitleTextProps> = (args) => <TitleText {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Sample Modal Title',
};
