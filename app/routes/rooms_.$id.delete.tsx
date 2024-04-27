import { useModalState } from '@hooks';
import { ModalErrorBoundary } from '@components';
import { DeleteRoomModal as DeleteRoomModalComponent } from '@features';

export const ErrorBoundary = ModalErrorBoundary;

const DeleteRoomModal = () => {
	const [isOpen, handleClose] = useModalState(`/rooms/${'1'}`);
	return (
		<DeleteRoomModalComponent isOpen={isOpen} onClose={handleClose} roomId={'1'} name={'b'} />
	);
};

export default DeleteRoomModal;
