import React, { useState } from 'react';
import Modal from '~/components/Modal/Modal';
import Container from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';

interface CreateRoomModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({
	isOpen,
	onClose,
}) => {
	const [inputValue, setInputValue] = useState('');

	const handleCreate = async () => {
		try {
			const response = await fetch('path/to/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ inputValue }),
			});

			if (response.ok) {
				// on success
			} else {
				// on failed
			}
		} catch (error) {
			console.error('error has occured:', error);
		}
	};

	const handleCancel = () => {
		setInputValue('');
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={handleCancel}>
			<h2 className="text-lg font-bold">create room</h2>
			<p className="text-sm text-gray-600 mb-4">
				
			</p>
			<TextInput
				value={inputValue}
				onChange={setInputValue}
				placeholder="room name"
				required
			/>
			<Container>
				<Button onClick={handleCancel}>do not create</Button>
				<Button
					onClick={handleCreate}
					disabled={inputValue.length === 0}
				>
					create
				</Button>
			</Container>
		</Modal>
	);
};

export default CreateRoomModal;
