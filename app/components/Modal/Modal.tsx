import ReactModal from 'react-modal';

export type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onClose}
			ariaHideApp={false}
			overlayClassName="animate-fade-in fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-20"
			className="bg-white w-1/2 p-4 rounded shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
		>
			{children}
		</ReactModal>
	);
};
