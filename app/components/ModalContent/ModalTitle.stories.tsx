import { Meta, StoryFn } from '@storybook/react';
import ModalTitle, { ModalTitleProps } from './ModalTitle';

const meta: Meta = {
	title: 'ModalTitle',
	component: ModalTitle,
};

export default meta;

const Template: StoryFn<ModalTitleProps> = (args) => <ModalTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Sample Modal Title',
};
