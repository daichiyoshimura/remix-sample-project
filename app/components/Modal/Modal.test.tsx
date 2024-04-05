import { render } from '@testing-library/react';
import { Modal } from '@components';

vi.mock('react-modal', () => ({
	__esModule: true,
	default: vi.fn(({ onRequestClose }: { onRequestClose: () => void }) => {
		onRequestClose();
		return null;
	}),
}));

describe('Modal', () => {
	it('renders when isOpen is true', () => {
		const { container } = render(
			<Modal isOpen={true} onClose={() => {}}>
				<div>Modal Content</div>
			</Modal>,
		);
		expect(container).toBeTruthy();
	});

	it('does not render children when isOpen is false', () => {
		const { queryByText } = render(
			<Modal isOpen={false} onClose={() => {}}>
				<div>Modal Content</div>
			</Modal>,
		);
		expect(queryByText('Modal Content')).toBeNull();
	});

	it('calls onClose when modal is closed', () => {
		const onCloseMock = vi.fn();
		render(
			<Modal isOpen={true} onClose={onCloseMock}>
				<div>Modal Content</div>
			</Modal>,
		);
		expect(onCloseMock).toHaveBeenCalled();
	});
});
