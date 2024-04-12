import { Meta, StoryFn } from '@storybook/react';
import { AccountIcon } from '@components';

const meta: Meta = {
	title: 'Components/AccountIcon',
	component: AccountIcon,
	argTypes: {
		className: { control: 'text' },
	},
};

export default meta;

const Template: StoryFn = (args) => <AccountIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: '',
};
