import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EditRoomModal as EditRoomModalComponent } from '@features';

const RoomProfilePage = () => {
	const [isOpen, setIsOpen] = useState(false);
	//To avoid warning due to StrictMode and React-Modal
	useEffect(() => setIsOpen(true), []);

	const navigate = useNavigate();
	const handleClose = () => {
		setIsOpen(false);
		navigate('../');
	};

	return <EditRoomModalComponent isOpen={isOpen} onClose={handleClose} roomId={'a'} />;
};

export default RoomProfilePage;
