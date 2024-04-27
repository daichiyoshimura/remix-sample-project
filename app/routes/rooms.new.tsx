import { useModalState } from '@hooks';
import { ModalErrorBoundary } from '@components';
import { CreateRoomModal as CreateRoomModalComponent } from '@features';

export const ErrorBoundary = ModalErrorBoundary;

const CreateRoomModal = () => {
	const [isOpen, handleClose] = useModalState('/rooms');
	return <CreateRoomModalComponent isOpen={isOpen} onClose={handleClose} />;
};

export default CreateRoomModal;
