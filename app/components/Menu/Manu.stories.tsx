import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryFn } from '@storybook/react';
import { Menu, MenuProps } from '@components';

const meta: Meta = {
	title: 'Menu',
	component: Menu,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<MenuProps> = (args) => (
	<MemoryRouter>
		<Menu {...args} />
	</MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			title: 'A',
			to: '/to/a',
		},
		{
			title: 'B',
			to: '/to/b',
		},
	],
};
