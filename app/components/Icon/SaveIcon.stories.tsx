import { Meta, StoryFn } from '@storybook/react';
import { SaveIcon } from '@components';

const meta: Meta = {
	title: 'Components/SaveIcon',
	component: SaveIcon,
	argTypes: {
		className: { control: 'text' },
	},
};

export default meta;

const Template: StoryFn = (args) => <SaveIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: '',
};
