import { render, screen, fireEvent } from '@testing-library/react';
import ModalMessage from './ModalMessage';

describe('ModalMessage', () => {
	it('renders modal message with title and description', () => {
		const handleClose = vi.fn();
		render(
			<ModalMessage
				title="Test Title"
				description="Test Description"
				handleClose={handleClose}
			/>,
		);

		const titleElement = screen.getByText('Test Title');
		const descriptionElement = screen.getByText('Test Description');

		expect(titleElement).toBeInTheDocument();
		expect(descriptionElement).toBeInTheDocument();
	});

	it('calls handleClose function when close button is clicked', () => {
		const handleClose = vi.fn();
		render(
			<ModalMessage
				title="Test Title"
				description="Test Description"
				handleClose={handleClose}
			/>,
		);

		const closeButton = screen.getByRole('button', { name: 'close' });
		fireEvent.click(closeButton);

		expect(handleClose).toHaveBeenCalled();
	});
});
