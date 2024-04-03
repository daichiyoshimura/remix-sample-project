import { Box } from '@components';
import { render } from '@testing-library/react';

describe('Box', () => {
	it('renders children correctly', () => {
		const { getByText } = render(
			<Box>
				<div>Test Child</div>
			</Box>,
		);
		expect(getByText('Test Child')).toBeInTheDocument();
	});

	it('applies correct styles', () => {
		const { container } = render(
			<Box>
				<div>Test Child</div>
			</Box>,
		);
		expect(container.firstChild).toHaveClass('bg-background');
		expect(container.firstChild).toHaveClass('p-4');
		expect(container.firstChild).toHaveClass('mrl-4');
		expect(container.firstChild).toHaveClass('rounded-lg');
		expect(container.firstChild).toHaveClass('shadow-md');
		expect(container.firstChild).toHaveClass('flex');
		expect(container.firstChild).toHaveClass('justify-center');
		expect(container.firstChild).toHaveClass('items-center');
	});
});
