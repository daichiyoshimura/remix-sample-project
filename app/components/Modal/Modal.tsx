import React from 'react';

interface ModalProps {
	isOpen: boolean;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
	return (
		<>
			{isOpen && (
				<div className="modal-overlay">
					<div className="modal-content">{children}</div>
				</div>
			)}
		</>
	);
};

export default Modal;
