import { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { CreateRoomModal as CreateRoomModalComponent } from '@features';

const CreateRoomModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	//To avoid warning due to StrictMode and React-Modal
	useEffect(() => setIsOpen(true), []);

	const navigate = useNavigate();
	const handleClose = () => {
		setIsOpen(false);
		navigate('../');
	};

	return <CreateRoomModalComponent isOpen={isOpen} onClose={handleClose} />;
};

export default CreateRoomModal;
