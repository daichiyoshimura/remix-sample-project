import { ReactNode } from 'react';
import { Modal } from '@components';

export type MutationModalProps = {
	state: 'idle' | 'loading' | 'submitting';
	inLoading: ReactNode;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
};

export const MutationModal = (
	{ state, inLoading, children, isOpen, onClose }: MutationModalProps,
) => {
	const renderContents = (): ReactNode => {
		if (state === ('loading' || 'submitting')) {
			return inLoading;
		}
		return children;
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			{renderContents()}
		</Modal>
	);
};
