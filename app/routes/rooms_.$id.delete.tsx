import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DeleteRoomModal as DeleteRoomModalComponent } from '@features';

const DeleteRoomModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	//To avoid warning due to StrictMode and React-Modal
	useEffect(() => setIsOpen(true), []);

	const navigate = useNavigate();
	const handleClose = () => {
		setIsOpen(false);
		navigate('../');
	};

	return (
		<DeleteRoomModalComponent isOpen={isOpen} onClose={handleClose} roomId={'a'} name={'b'} />
	);
};

export default DeleteRoomModal;
