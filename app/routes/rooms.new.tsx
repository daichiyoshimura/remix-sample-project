import { useModalState } from '@hooks';
import { CreateRoomModal as CreateRoomModalComponent } from '@features';

const CreateRoomModal = () => {
	const [isOpen, handleClose] = useModalState('../');
	return <CreateRoomModalComponent isOpen={isOpen} onClose={handleClose} />;
};

export default CreateRoomModal;
