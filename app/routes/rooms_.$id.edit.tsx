import { useModalState } from '@hooks';
import { EditRoomModal as EditRoomModalComponent } from '@features';

const EditRoomModal = () => {
	const [isOpen, handleClose] = useModalState('../');
	return <EditRoomModalComponent isOpen={isOpen} onClose={handleClose} roomId={'a'} />;
};

export default EditRoomModal;
