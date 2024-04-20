import { render, fireEvent } from '@testing-library/react';
import { DeleteRoomModal } from '@features';

describe('DeleteRoomModal', () => {
	vi.mock('@remix-run/react', () => {
		const useOutletContext = vi.fn().mockImplementation(() => {
			return { state: 'idle' };
		});
		const useActionData = vi.fn().mockImplementation(() => {
			return undefined;
		});
		const Form = vi
			.fn()
			.mockImplementation(({ children }: { children: React.ReactElement }) => {
				return children;
			});
		return {
			useActionData,
			useOutletContext,
			Form,
		};
	});
	it('closes the modal when "do not delete" button is clicked', () => {
		const handleClose = vi.fn();
		const { getByText } = render(
			<DeleteRoomModal isOpen roomId="123" onClose={handleClose} name={''} />,
		);

		const doNotDeleteButton = getByText('Do not delete');
		fireEvent.click(doNotDeleteButton);

		expect(handleClose).toHaveBeenCalled();
	});

	it('disables delete button if input value does not match room name', () => {
		const handleClose = vi.fn();
		const { getByText } = render(
			<DeleteRoomModal isOpen roomId="123" onClose={handleClose} name={''} />,
		);

		const deleteButton = getByText('Delete') as HTMLButtonElement;
		expect(deleteButton.disabled).toBe(true);
	});

	it('enables delete button if input value matches room name', async () => {
		const handleClose = vi.fn();
		const { getByText, getByPlaceholderText } = render(
			<DeleteRoomModal isOpen roomId="123" onClose={handleClose} name={'hoge'} />,
		);

		const input = getByPlaceholderText('hoge');
		fireEvent.change(input, { target: { value: 'hoge' } });

		const deleteButton = getByText('Delete') as HTMLButtonElement;
		await expect(deleteButton.disabled).toBe(false);
	});
});
