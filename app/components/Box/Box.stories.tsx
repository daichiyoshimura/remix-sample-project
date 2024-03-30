import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta = {
	title: 'Box',
	component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;

export const HelloBox: Story = {
	render: () => <Box>Hello World</Box>,
};
