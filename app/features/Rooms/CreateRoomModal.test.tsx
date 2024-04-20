import { render, fireEvent } from '@testing-library/react';
import { CreateRoomModal } from '@features';

describe('CreateRoomModal', () => {
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
	it('closes the modal when "do not create" button is clicked', () => {
		const handleClose = vi.fn();
		const { getByText } = render(<CreateRoomModal isOpen onClose={handleClose} />);

		const doNotCreateButton = getByText('Do not create');
		fireEvent.click(doNotCreateButton);

		expect(handleClose).toHaveBeenCalled();
	});

	it('disables create button if input value is empty', () => {
		const handleClose = vi.fn();
		const { getByText } = render(<CreateRoomModal isOpen onClose={handleClose} />);

		const createButton = getByText('Create') as HTMLButtonElement;
		expect(createButton.disabled).toBe(true);
	});

	it('enables create button if input value is not empty', () => {
		const handleClose = vi.fn();
		const { getByText, getByPlaceholderText } = render(
			<CreateRoomModal isOpen onClose={handleClose} />,
		);

		const input = getByPlaceholderText('name');
		fireEvent.change(input, { target: { value: 'name' } });

		const createButton = getByText('Create') as HTMLButtonElement;
		expect(createButton.disabled).toBe(false);
	});
});
