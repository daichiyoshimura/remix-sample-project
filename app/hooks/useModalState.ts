import { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';

// TODO: separate useNavigate (single responsibility)
export const useModalState = (to: string): [boolean, () => void] => {
	const [isOpen, setIsOpen] = useState(false);
	//To avoid warning due to StrictMode and React-Modal
	useEffect(() => setIsOpen(true), []);

	const navigate = useNavigate();
	const handleClose = () => {
		setIsOpen(false);
		navigate(to);
	};
	return [isOpen, handleClose];
};
