import React, { useState } from 'react';
import { useHttpClient } from '~/hooks/useHttpClient';
import { useRequestState } from '~/hooks/useRequestState';

import Modal from '~/components/Modal/Modal';
import Container from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import ModalTitle from '~/components/ModalContent/ModalTitle';
import ModalDescription from '~/components/ModalContent/ModalDescription';
import LoadingIcon from '~/components/LoadingIcon/LoadingIcon';

export interface DeleteRoomModalProps {
	isOpen: boolean;
	name: string;
	onClose: () => void;
	roomId: string;
}

const DeleteRoomModal: React.FC<DeleteRoomModalProps> = ({
	isOpen,
	name,
	onClose,
	roomId,
}) => {
	const [inputValue, setInputValue] = useState('');
	const [requestStatus, resetRequestStatus, sendRequest] = useHttpClient({
		path: roomId,
		method: 'DELETE',
		body: JSON.stringify({ inputValue }),
	});

	const handleDelete = async () => await sendRequest();

	const handleClose = () => {
		resetRequestStatus();
		setInputValue('');
		onClose();
	};

	const renderContent = () => {
		switch (requestStatus) {
			case 'init':
				return (
					<>
						<ModalTitle
							title={'Are you sure you want to delete?'}
						/>
						<ModalDescription
							description={`
								To delete, please enter the same name in the textbox below and
								press the delete button.
							`}
						/>
						<TextInput
							value={inputValue}
							onChange={setInputValue}
							placeholder={name}
							required
						/>
						<Container alignment="right">
							<Button onClick={handleClose}>do not delete</Button>
							<Button
								onClick={handleDelete}
								color="caution"
								disabled={inputValue !== name}
							>
								delete
							</Button>
						</Container>
					</>
				);
			case 'loading':
				return <LoadingIcon />;
			case 'success':
				return (
					<>
						<ModalTitle title={'Success'} />
						<Container alignment="right">
							<Button onClick={handleClose}>close</Button>
						</Container>
					</>
				);
			case 'failure':
				return (
					<>
						<ModalTitle title={'Failed to create room'} />
						<ModalDescription
							description={`
							Please try again later, or contact support if the issue persists
						`}
						/>
						<Container alignment="right">
							<Button onClick={handleClose}>close</Button>
						</Container>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			{renderContent()}
		</Modal>
	);
};

export default DeleteRoomModal;
