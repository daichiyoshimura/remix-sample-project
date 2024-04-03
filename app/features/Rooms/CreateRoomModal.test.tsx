import { render, fireEvent } from '@testing-library/react';
import CreateRoomModal from './CreateRoomModal';

describe('CreateRoomModal', () => {
	it('closes the modal when "do not create" button is clicked', () => {
		const handleClose = vi.fn();
		const { getByText } = render(<CreateRoomModal isOpen onClose={handleClose} />);

		const doNotCreateButton = getByText('do not create');
		fireEvent.click(doNotCreateButton);

		expect(handleClose).toHaveBeenCalled();
	});

	it('disables create button if input value is empty', () => {
		const handleClose = vi.fn();
		const { getByText } = render(<CreateRoomModal isOpen onClose={handleClose} />);

		const createButton = getByText('create') as HTMLButtonElement;
		expect(createButton.disabled).toBe(true);
	});

	it('enables create button if input value is not empty', () => {
		const handleClose = vi.fn();
		const { getByText, getByPlaceholderText } = render(
			<CreateRoomModal isOpen onClose={handleClose} />,
		);

		const input = getByPlaceholderText('room name');
		fireEvent.change(input, { target: { value: 'Test Room' } });

		const createButton = getByText('create') as HTMLButtonElement;
		expect(createButton.disabled).toBe(false);
	});
});
