import { useModalState } from '@hooks';
import { ModalErrorBoundary, Modal } from '@components';

export const ErrorBoundary = ModalErrorBoundary;

const EditAccountModal = () => {
	const [isOpen, handleClose] = useModalState(`/accounts/${'1'}`);
	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			<p>Not Implemented</p>
		</Modal>
	);
};

export default EditAccountModal;
