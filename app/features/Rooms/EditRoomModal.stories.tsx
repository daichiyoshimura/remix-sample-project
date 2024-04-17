import {
	reactRouterNestedAncestors,
	reactRouterParameters,
	withRouter,
} from 'storybook-addon-remix-react-router';
import { Meta, StoryFn } from '@storybook/react';
import { Outlet } from '@remix-run/react';
import { EditRoomModal, EditRoomModalProps } from '@features';

const meta: Meta = {
	title: 'EditRoomModal',
	component: EditRoomModal,
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

const Template: StoryFn<EditRoomModalProps> = (args) => <EditRoomModal {...args} />;

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	roomId: '123',
	onClose: () => {},
};
