import { Meta, StoryFn } from '@storybook/react';
import { LoadingIcon } from '@components';

const meta: Meta = {
	title: 'LoadingIcon',
	component: LoadingIcon,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn = () => <LoadingIcon />;

export const Default = Template.bind({});
