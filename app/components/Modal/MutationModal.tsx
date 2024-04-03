import { FC, ReactNode } from 'react';
import { MutationState } from '~/hooks/useMutationState';

import Modal from '~/components/Modal/Modal';
import LoadingIcon from '~/components/LoadingIcon/LoadingIcon';
import ModalMessage from '~/components/ModalContent/ModalMessage';

export type MutationModalProps = {
	isOpen: boolean;
	mutationState: MutationState;
	handleMutation: () => void;
	handleClose: () => void;
	mutationContent: (handleMutation: () => void) => ReactNode;
	successMessage: { title: string; description: string };
	failedMessage: { title: string; description: string };
};

const MutationModal: FC<MutationModalProps> = ({
	isOpen,
	mutationState,
	handleMutation,
	handleClose,
	mutationContent,
	successMessage,
	failedMessage,
}) => {
	const renderContent = () => {
		switch (mutationState) {
			case 'init':
				return mutationContent(handleMutation);
			case 'loading':
				return <LoadingIcon />;
			case 'success':
				return (
					<ModalMessage
						title={successMessage.title}
						description={successMessage.description}
						handleClose={handleClose}
					/>
				);
			case 'failure':
				return (
					<ModalMessage
						title={failedMessage.title}
						description={failedMessage.description}
						handleClose={handleClose}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			{renderContent()}
		</Modal>
	);
};

export default MutationModal;
