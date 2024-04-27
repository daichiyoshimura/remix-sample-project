import { StoryFn, Meta } from '@storybook/react';
import { List, ListProps } from '@components';

const meta: Meta = {
	title: 'List',
	component: List,
	tags: ['autodocs'],
};

export default meta;

const items = ['Item 1', 'Item 2', 'Item 3'];
const renderItem = (item: string) => <span>{item}</span>;

const Template: StoryFn<ListProps<string>> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
	items: items,
	render: renderItem,
};
