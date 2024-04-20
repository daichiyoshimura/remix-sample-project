import { render } from '@testing-library/react';
import { MessageModal } from '@components';

describe('MessageModal', () => {
	it('renders title and description when isOpen is true', () => {
		const title = 'TestTitle';
		const description = 'TestDescription';
		const onCloseMock = vi.fn();

		const { getByText } = render(
			<MessageModal
				isOpen={true}
				onClose={onCloseMock}
				title={title}
				description={description}
			/>,
		);

		expect(getByText(title)).toBeInTheDocument();
		expect(getByText(description)).toBeInTheDocument();
	});

	it('does not render title and description when isOpen is false', () => {
		const title = 'Test Title';
		const description = 'Test Description';
		const onCloseMock = vi.fn();

		const { queryByText } = render(
			<MessageModal
				isOpen={false}
				onClose={onCloseMock}
				title={title}
				description={description}
			/>,
		);

		expect(queryByText(title)).toBeNull();
		expect(queryByText(description)).toBeNull();
	});

	it('calls onClose when close button is clicked', () => {
		const onCloseMock = vi.fn();

		const { getByRole } = render(
			<MessageModal
				isOpen={true}
				onClose={onCloseMock}
				title="Test Title"
				description="Test Description"
			/>,
		);

		const closeButton = getByRole('button');
		closeButton.click();

		expect(onCloseMock).toHaveBeenCalled();
	});
});
