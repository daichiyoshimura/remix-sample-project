import { Meta, StoryFn } from '@storybook/react';
import { TextInput, TextInputProps } from '@components';

const meta: Meta = {
	title: 'TextInput',
	component: TextInput,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: '',
	onChange: () => {},
	placeholder: 'Enter text',
};
