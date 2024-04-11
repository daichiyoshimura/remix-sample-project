import { StoryFn, Meta } from '@storybook/react';
import { MessageModal, MessageModalProps } from '@components';

const meta: Meta = {
	title: 'MessageModal',
	component: MessageModal,
	tags: ['autodocs'],
};

const Template: StoryFn<MessageModalProps> = (args) => <MessageModal {...args} />;

export default meta;

export const Default = Template.bind({});
Default.args = {
	title: 'Title',
	description: 'Description',
	isOpen: true,
	onClose: () => {},
};
