import { Meta, StoryFn } from '@storybook/react';
import LoadingIcon from './LoadingIcon';

const meta: Meta = {
	title: 'LoadingIcon',
	component: LoadingIcon,
};

export default meta;

const Template: StoryFn = () => <LoadingIcon />;

export const Default = Template.bind({});
