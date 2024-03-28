import React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onClose}
			ariaHideApp={false}
			overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
			className="bg-white w-1/2 p-4 rounded shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		>
			{children}
		</ReactModal>
	);
};

export default Modal;
