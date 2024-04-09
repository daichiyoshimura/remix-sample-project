import { render, fireEvent } from '@testing-library/react';
import { DeleteRoomModal } from '@features';

describe('DeleteRoomModal', () => {
	vi.mock('@remix-run/react', () => {
		const useNavigate = vi.fn();
		const form = vi
			.fn()
			.mockImplementation(({ children }: { children: React.ReactElement }) => {
				return children;
			});
		return {
			useNavigate,
			Form: form,
		};
	});
	it('closes the modal when "do not delete" button is clicked', () => {
		const handleClose = vi.fn();
		const { getByText } = render(<DeleteRoomModal isOpen roomId="123" onClose={handleClose} />);

		const doNotDeleteButton = getByText('Do not delete');
		fireEvent.click(doNotDeleteButton);

		expect(handleClose).toHaveBeenCalled();
	});

	it('disables delete button if input value does not match room name', () => {
		const handleClose = vi.fn();
		const { getByText } = render(<DeleteRoomModal isOpen roomId="123" onClose={handleClose} />);

		const deleteButton = getByText('Delete') as HTMLButtonElement;
		expect(deleteButton.disabled).toBe(true);
	});

	it('enables delete button if input value matches room name', async () => {
		const handleClose = vi.fn();
		const { getByText, getByPlaceholderText } = render(
			<DeleteRoomModal isOpen roomId="123" onClose={handleClose} />,
		);

		const input = getByPlaceholderText('name');
		fireEvent.change(input, { target: { value: 'name' } });

		const deleteButton = getByText('Delete') as HTMLButtonElement;
		await expect(deleteButton.disabled).toBe(false);
	});
});
