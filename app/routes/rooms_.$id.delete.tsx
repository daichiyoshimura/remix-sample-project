import { useModalState } from '@hooks';
import { DeleteRoomModal as DeleteRoomModalComponent } from '@features';

const DeleteRoomModal = () => {
	const [isOpen, handleClose] = useModalState('../');
	return (
		<DeleteRoomModalComponent isOpen={isOpen} onClose={handleClose} roomId={'a'} name={'b'} />
	);
};

export default DeleteRoomModal;
