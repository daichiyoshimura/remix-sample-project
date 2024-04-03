import { StoryFn, Meta } from '@storybook/react';
import { ModalMessage, ModalMessageProps } from '@components';

export default {
	title: 'Components/ModalMessage',
	component: ModalMessage,
} as Meta;

const Template: StoryFn<ModalMessageProps> = (args) => <ModalMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Test Title',
	description: 'Test Description',
	handleClose: () => console.log('Close button clicked'),
};
