import { Meta, StoryFn } from '@storybook/react';
import ContentArea, { ContentAreaProps } from './ContentArea';

const meta: Meta = {
	title: 'ContentArea',
	component: ContentArea,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<ContentAreaProps> = (args) => <ContentArea {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
		</>
	),
};
