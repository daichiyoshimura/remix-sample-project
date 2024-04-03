import { Meta, StoryFn } from '@storybook/react';
import { DeleteRoomModal, DeleteRoomModalProps } from '@features';

const meta: Meta = {
	title: 'DeleteRoomModal',
	component: DeleteRoomModal,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<DeleteRoomModalProps> = (args) => <DeleteRoomModal {...args} />;

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	name: 'Test Room',
	roomId: '123',
	onClose: () => {},
};
