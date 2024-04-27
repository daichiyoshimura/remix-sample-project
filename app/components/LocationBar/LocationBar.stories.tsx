import { Meta, StoryFn } from '@storybook/react';
import { LocationBar, LocationBarProps } from '@components';

const meta: Meta = {
	title: 'LocationBar',
	component: LocationBar,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<LocationBarProps> = (args) => <LocationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Hoge',
	pathname: '/hoge',
};
