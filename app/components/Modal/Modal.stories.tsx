import { Meta, StoryFn } from '@storybook/react';
import Modal, { ModalProps } from './Modal';

const meta: Meta = {
	title: 'Modal',
	component: Modal,
};

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export default meta;

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	onClose: () => {},
	children: <div>This is a modal content</div>,
};
