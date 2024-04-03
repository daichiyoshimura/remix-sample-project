import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CreateRoomModal, { CreateRoomModalProps } from './CreateRoomModal';

const meta: Meta = {
	title: 'CreateRoomModal',
	component: CreateRoomModal,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<CreateRoomModalProps> = (args) => {
	const [isOpen, setIsOpen] = useState(true);
	return <CreateRoomModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {};
