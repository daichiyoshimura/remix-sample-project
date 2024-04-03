import { render, fireEvent } from '@testing-library/react';
import { TextInput } from '@components';

describe('TextInput', () => {
	it('renders correctly', () => {
		const { getByPlaceholderText } = render(
			<TextInput value="" onChange={() => {}} placeholder="Enter text" />,
		);
		const inputElement = getByPlaceholderText('Enter text');
		expect(inputElement).toBeDefined();
	});

	it('calls onChange handler correctly', () => {
		const onChangeMock = vi.fn();
		const { getByPlaceholderText } = render(
			<TextInput value="" onChange={onChangeMock} placeholder="Enter text" />,
		);
		const inputElement = getByPlaceholderText('Enter text');
		fireEvent.change(inputElement, { target: { value: 'test input' } });
		expect(onChangeMock).toHaveBeenCalledWith('test input');
	});
});
