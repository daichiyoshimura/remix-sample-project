import { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

const meta: Meta = {
	title: 'TextInput',
	component: TextInput,
};

export default meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	value: '',
	onChange: () => {},
	placeholder: 'Enter text',
};
