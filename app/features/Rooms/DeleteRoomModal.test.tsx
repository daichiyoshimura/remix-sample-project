import { render, fireEvent } from '@testing-library/react';
import DeleteRoomModal from './DeleteRoomModal';

describe('DeleteRoomModal', () => {
	it('closes the modal when "do not delete" button is clicked', () => {
		const handleClose = vi.fn();
		const { getByText } = render(
			<DeleteRoomModal
				isOpen
				name="Test Room"
				roomId="123"
				onClose={handleClose}
			/>,
		);

		const doNotDeleteButton = getByText('do not delete');
		fireEvent.click(doNotDeleteButton);

		expect(handleClose).toHaveBeenCalled();
	});

	it('disables delete button if input value does not match room name', () => {
		const handleClose = vi.fn();
		const { getByText } = render(
			<DeleteRoomModal
				isOpen
				name="Test Room"
				roomId="123"
				onClose={handleClose}
			/>,
		);

		const deleteButton = getByText('delete') as HTMLButtonElement;
		expect(deleteButton.disabled).toBe(true);
	});

	it('enables delete button if input value matches room name', async () => {
		const handleClose = vi.fn();
		const { getByText, getByPlaceholderText } = render(
			<DeleteRoomModal
				isOpen
				name="Test Room"
				roomId="123"
				onClose={handleClose}
			/>,
		);

		const input = getByPlaceholderText('Test Room');
		fireEvent.change(input, { target: { value: 'Test Room' } });

		const deleteButton = getByText('delete') as HTMLButtonElement;
		await expect(deleteButton.disabled).toBe(false);
	});
});
