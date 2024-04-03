import type { Meta, StoryFn } from '@storybook/react';
import { Box, BoxProps } from '@components';

const meta = {
	title: 'Box',
	component: Box,
	tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;

const Template: StoryFn<BoxProps> = (args) => <Box {...args} />;

export const Single = Template.bind({});
Single.args = {
	children: <div>Text</div>,
};

export const Complex = Template.bind({});
Complex.args = {
	children: (
		<>
			<div>Text1</div>
			<div>Text2</div>
		</>
	),
};
