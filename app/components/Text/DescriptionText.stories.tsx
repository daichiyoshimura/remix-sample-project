import { Meta, StoryFn } from '@storybook/react';
import { DescriptionText, DescriptionTextProps } from '@components';

const meta: Meta = {
	title: 'ModalDescription',
	component: DescriptionText,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<DescriptionTextProps> = (args) => <DescriptionText {...args} />;

export const Default = Template.bind({});
Default.args = {
	description: 'This is a default modal description',
};
