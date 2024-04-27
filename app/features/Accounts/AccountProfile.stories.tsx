import { Meta, StoryFn } from '@storybook/react';
import { AccountProfile, AccountProfileProps } from '@features';

const meta: Meta = {
	title: 'AccountProfile',
	component: AccountProfile,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<AccountProfileProps> = (args) => <AccountProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: '1',
	name: 'John Doe',
};
