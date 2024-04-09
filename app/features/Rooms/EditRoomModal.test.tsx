import { render, fireEvent } from '@testing-library/react';
import { EditRoomModal } from '@features';

describe('EditRoomModal', () => {
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
	it('closes the modal when "Do not save" button is clicked', () => {
		const handleClose = vi.fn();

		const { getByText } = render(<EditRoomModal isOpen roomId="123" onClose={handleClose} />);

		const doNotSaveButton = getByText('Do not save');
		fireEvent.click(doNotSaveButton);

		expect(handleClose).toHaveBeenCalled();
	});

	it('disables save button if input value is the same as room name or empty', async () => {
		const handleClose = vi.fn();
		const { getByText } = render(<EditRoomModal isOpen roomId="123" onClose={handleClose} />);

		const saveButton = getByText('Save') as HTMLButtonElement;
		expect(saveButton.disabled).toBe(true);
	});

	it('enables save button if input value is different from room name and not empty', async () => {
		const handleClose = vi.fn();
		const { getByText, getByPlaceholderText } = render(
			<EditRoomModal isOpen roomId="123" onClose={handleClose} />,
		);

		const input = getByPlaceholderText('name');
		fireEvent.change(input, { target: { value: 'name' } });

		const saveButton = getByText('Save') as HTMLButtonElement;
		await expect(saveButton.disabled).toBe(false);
	});
});
