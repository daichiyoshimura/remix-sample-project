import { useModalState } from '@hooks';
import { ModalErrorBoundary } from '@components';
import { EditRoomModal as EditRoomModalComponent } from '@features';

export const ErrorBoundary = ModalErrorBoundary;

const EditRoomModal = () => {
	const [isOpen, handleClose] = useModalState('../');
	return <EditRoomModalComponent isOpen={isOpen} onClose={handleClose} roomId={'a'} />;
};

export default EditRoomModal;
