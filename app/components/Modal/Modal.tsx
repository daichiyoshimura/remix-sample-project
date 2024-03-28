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
			overlayClassName="modal-overlay"
			className="modal-content"
		>
			{children}
		</ReactModal>
	);
};

export default Modal;
