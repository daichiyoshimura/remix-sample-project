import { useModalState } from '@hooks';
import { ModalErrorBoundary, Modal } from '@components';

export const ErrorBoundary = ModalErrorBoundary;

const NewParticipantModal = () => {
	const [isOpen, handleClose] = useModalState(`/participants`);
	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			<p>Not Implemented</p>
		</Modal>
	);
};

export default NewParticipantModal;
