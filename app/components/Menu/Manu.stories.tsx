import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryFn } from '@storybook/react';
import { Menu } from '@components';

const meta: Meta = {
	title: 'Menu',
	component: Menu,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn = () => (
	<MemoryRouter>
		<Menu />
	</MemoryRouter>
);

export const Default = Template.bind({});
