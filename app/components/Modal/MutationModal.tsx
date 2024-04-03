import { FC, ReactNode } from 'react';

import Modal from '~/components/Modal/Modal';
import { MutationState } from '~/hooks/useMutationState';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import ModalMessage, { ModalMessageProps } from '../ModalContent/ModalMessage';

export type MutationModalProps = {
	isOpen: boolean;
	onClose: () => void;
	mutationState: MutationState;
	handleMutation: () => void;
	handleClose: () => void;
	init: (handleMutation: () => void) => ReactNode;
	successMessage: ModalMessageProps;
	failedMessage: ModalMessageProps;
};

const MutationModal: FC<MutationModalProps> = ({
	isOpen,
	onClose,
	mutationState,
	handleMutation,
	handleClose,
	init,
	successMessage,
	failedMessage,
}) => {
	const renderContent = () => {
		switch (mutationState) {
			case 'init':
				return init(handleMutation);
			case 'loading':
				return <LoadingIcon />;
			case 'success':
				return (
					<ModalMessage
						props={successMessage}
						handleClose={handleClose}
					/>
				);
			case 'failure':
				return (
					<ModalMessage
						props={failedMessage}
						handleClose={handleClose}
					/>
				);
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
