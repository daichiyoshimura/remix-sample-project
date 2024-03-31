import { Meta, StoryFn } from '@storybook/react';
import ModalDescription, { ModalDescriptionProps } from './ModalDescription';

const meta: Meta = {
	title: 'ModalDescription',
	component: ModalDescription,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<ModalDescriptionProps> = (args) => (
	<ModalDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {
	description: 'This is a default modal description',
};
