import { render, fireEvent } from '@testing-library/react';
import { SaveButton } from '@components';

describe('SaveButton', () => {
	it('renders', async () => {
		const { getByRole } = render(<SaveButton />);
		const button = getByRole('button');
		expect(button).toBeDefined();
	});

	it('calls onClick function when clicked', async () => {
		const onClickMock = vi.fn();
		const { getByRole } = render(<SaveButton onClick={onClickMock} />);
		const button = getByRole('button');
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalled();
	});

	it('is disabled when disabled prop is true', async () => {
		const { getByRole } = render(<SaveButton disabled />);
		const button = getByRole('button') as HTMLButtonElement;
		expect(button.disabled).toBeTruthy();
	});
});
