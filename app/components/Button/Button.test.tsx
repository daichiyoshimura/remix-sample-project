import { render, fireEvent } from '@testing-library/react';
import { Button } from '@components';

describe('Button', () => {
	it('renders children correctly', () => {
		const childElement = <span>Test Button</span>;

		const { getByText } = render(<Button>{childElement}</Button>);

		expect(getByText('Test Button')).toBeInTheDocument();
	});

	it('calls onClick handler when clicked', () => {
		const onClickMock = vi.fn();

		const { getByText } = render(<Button onClick={onClickMock}>Click Me</Button>);

		fireEvent.click(getByText('Click Me'));

		expect(onClickMock).toHaveBeenCalled();
	});

	it('applies correct styles', () => {
		const { getByText } = render(<Button>Test Button</Button>);

		expect(getByText('Test Button')).toHaveClass('bg-blue-500');
		expect(getByText('Test Button')).toHaveClass('hover:bg-blue-700');
		expect(getByText('Test Button')).toHaveClass('py-2');
		expect(getByText('Test Button')).toHaveClass('px-6');
		expect(getByText('Test Button')).toHaveClass('text-white');
		expect(getByText('Test Button')).toHaveClass('font-bold');
		expect(getByText('Test Button')).toHaveClass('rounded');
	});

	it('applies correct styles when disabled', () => {
		const { getByText } = render(<Button disabled>Disabled Button</Button>);

		expect(getByText('Disabled Button')).toHaveClass('bg-gray-500');
		expect(getByText('Disabled Button')).toHaveClass('hover:bg-gray-500');
		expect(getByText('Disabled Button')).toHaveClass('py-2');
		expect(getByText('Disabled Button')).toHaveClass('px-6');
		expect(getByText('Disabled Button')).toHaveClass('text-white');
		expect(getByText('Disabled Button')).toHaveClass('font-bold');
		expect(getByText('Disabled Button')).toHaveClass('rounded');
	});

	it('applies correct styles with color prop', () => {
		const { getByText } = render(<Button color="safe">Safe Button</Button>);

		expect(getByText('Safe Button')).toHaveClass('bg-green-500');
		expect(getByText('Safe Button')).toHaveClass('hover:bg-green-700');
	});
});
