import React, { useState } from 'react';
import Modal from '~/components/Modal/Modal';
import Container from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';
import ModalTitle from '~/components/ModalContent/ModalTitle';
import ModalDescription from '~/components/ModalContent/ModalDescription';
import LoadingIcon from '~/components/LoadingIcon/LoadingIcon';

interface EditRoomModalProps {
	isOpen: boolean;
	name: string;
	onClose: () => void;
	roomId: string;
}

const EditRoomModal: React.FC<EditRoomModalProps> = ({
	isOpen,
	name,
	onClose,
	roomId,
}) => {
	const [editStatus, setEditStatus] = useState<
		'init' | 'success' | 'failure' | 'loading'
	>('init');
	const [editedName, setEditedName] = useState('');

	const handleEdit = async (roomId: string) => {
		try {
			setEditStatus('loading');
			const response = await fetch(`${roomId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ editedName }),
			});

			if (response.ok) {
				setEditStatus('success');
				return;
			}
			throw new Error('bad status code');
		} catch (error) {
			console.error('error has occured:', error);
			setEditStatus('failure');
		}
	};

	const handleClose = () => {
		setEditStatus('init');
		onClose();
	};

	const renderContent = () => {
		switch (editStatus) {
			case 'init':
				return (
					<>
						<ModalTitle title={'Edit'} />
						<TextInput
							value={editedName}
							onChange={setEditedName}
							placeholder={name}
							required
						/>
						<Container alignment="right">
							<Button onClick={handleClose}>Do not save</Button>
							<Button
								onClick={() => handleEdit(roomId)}
								disabled={editedName === name}
							>
								Save
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
							<Button onClick={onClose}>Close</Button>
						</Container>
					</>
				);
			case 'failure':
				return (
					<>
						<ModalTitle title={'Failed to save room'} />
						<ModalDescription
							description={`
							Please try again later, or contact support if the issue persists
						`}
						/>
						<Container alignment="right">
							<Button onClick={onClose}>close</Button>
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

export default EditRoomModal;
