import { render, fireEvent } from '@testing-library/react';
import { EditButton } from '@components';

describe('EditButton', () => {
	it('calls onClick function when clicked', async () => {
		const onClickMock = vi.fn();
		const { getByRole } = render(<EditButton onClick={onClickMock} />);
		const button = getByRole('button');
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalled();
	});

	it('is disabled when disabled prop is true', async () => {
		const { getByRole } = render(<EditButton disabled />);
		const button = getByRole('button') as HTMLButtonElement;
		expect(button.disabled).toBeTruthy();
	});
});
