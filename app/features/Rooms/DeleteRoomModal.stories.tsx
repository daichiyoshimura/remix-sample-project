import {
	reactRouterNestedAncestors,
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import { Meta, StoryFn } from '@storybook/react';
import { Outlet } from '@remix-run/react';
import { DeleteRoomModal, DeleteRoomModalProps } from '@features';

const meta: Meta = {
	title: 'DeleteRoomModal',
	component: DeleteRoomModal,
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

const Template: StoryFn<DeleteRoomModalProps> = (args) => <DeleteRoomModal {...args} />;

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	name: 'Test Room',
	roomId: '123',
	onClose: () => {},
};
