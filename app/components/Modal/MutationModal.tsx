import { FC, ReactNode } from 'react';

import Modal from '~/components/Modal/Modal';
import { MutationState } from '~/hooks/useMutationState';

export type MutationModalProps = {
	isOpen: boolean;
	onClose: () => void;
	mutationState: MutationState;
	handleMutation: () => void;
	handleClose: () => void;
	init: (handleMutation: () => void) => ReactNode;
	loading: () => ReactNode;
	success: (handleClose: () => void) => ReactNode;
	failed: (handleClose: () => void) => ReactNode;
};

const MutationModal: FC<MutationModalProps> = ({
	isOpen,
	onClose,
	mutationState,
	handleMutation,
	handleClose,
	init,
	loading,
	success,
	failed,
}) => {
	const renderContent = () => {
		switch (mutationState) {
			case 'init':
				return init(handleMutation);
			case 'loading':
				return loading();
			case 'success':
				return success(handleClose);
			case 'failure':
				return failed(handleClose);
			default:
				return null;
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			{renderContent()}
		</Modal>
	);
};

export default MutationModal;
