import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from './Container';

const meta: Meta = {
	title: 'Container',
	component: Container,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<ContainerProps> = (args) => <Container {...args} />;

export const Center = Template.bind({});
Center.args = {
	alignment: 'center',
	children: (
		<>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
		</>
	),
};

export const Right = Template.bind({});
Right.args = {
	alignment: 'right',
	children: (
		<>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
		</>
	),
};
