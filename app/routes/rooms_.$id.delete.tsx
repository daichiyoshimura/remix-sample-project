import { useModalState } from '@hooks';
import { ModalErrorBoundary } from '@components';
import { DeleteRoomModal as DeleteRoomModalComponent } from '@features';

export const ErrorBoundary = ModalErrorBoundary;

const DeleteRoomModal = () => {
	const [isOpen, handleClose] = useModalState('../');
	return (
		<DeleteRoomModalComponent isOpen={isOpen} onClose={handleClose} roomId={'a'} name={'b'} />
	);
};

export default DeleteRoomModal;
