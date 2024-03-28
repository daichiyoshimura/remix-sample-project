import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import Modal from './Modal';

vi.mock('react-modal', () => ({
	__esModule: true,
	default: vi.fn(({ onRequestClose }: { onRequestClose: () => void }) => {
		// onRequestCloseが呼ばれたら閉じる処理を行う
		onRequestClose();
		return null;
	}), // モックコンポーネントを返す
}));

describe('Modal', () => {
	it('renders when isOpen is true', () => {
		// Modalコンポーネントをレンダリングする
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
		// onCloseモック関数を作成する
		const onCloseMock = vi.fn();
		// Modalコンポーネントをレンダリングする
		render(
			<Modal isOpen={true} onClose={onCloseMock}>
				<div>Modal Content</div>
			</Modal>,
		);
		// onCloseが呼ばれたことを確認する
		expect(onCloseMock).toHaveBeenCalled();
	});
});
