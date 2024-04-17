import {
	reactRouterParameters,
	withRouter,
	reactRouterNestedAncestors,
} from 'storybook-addon-remix-react-router';
import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Outlet } from '@remix-run/react';
import { CreateRoomModal, CreateRoomModalProps } from '@features';

const meta: Meta = {
	title: 'CreateRoomModal',
	component: CreateRoomModal,
	tags: ['autodocs'],
	parameters: {
		reactRouter: reactRouterParameters({
			routing: reactRouterNestedAncestors(<Outlet context={{ state: 'idle' }} />),
		}),
		routing: { path: '/rooms' },
	},
	decorators: [withRouter],
};

export default meta;

const Template: StoryFn<CreateRoomModalProps> = (args) => {
	const [isOpen, setIsOpen] = useState(true);
	return <CreateRoomModal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {};
