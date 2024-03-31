import { Meta, StoryFn } from '@storybook/react';
import EditRoomModal, { EditRoomModalProps } from './EditRoomModal';

const meta: Meta = {
	title: 'EditRoomModal',
	component: EditRoomModal,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<EditRoomModalProps> = (args) => (
	<EditRoomModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	name: 'Test Room',
	roomId: '123',
	onClose: () => {},
};
