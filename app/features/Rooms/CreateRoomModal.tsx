import React, { useState } from 'react';
import Modal from '~/components/Modal/Modal';
import ButtonContainer from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';

interface CreateRoomModalProps {
	isOpen: boolean;
	pathToCreate: string;
	title: string;
	description: string;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ isOpen }) => {
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
	};

	return (
		<Modal isOpen={isOpen} onClose={handleCancel}>
			<h2 className="text-lg font-bold">create room</h2>
			<TextInput
				value={inputValue}
				onChange={setInputValue}
				placeholder="room name"
				required
			/>
			<ButtonContainer>
				<Button onClick={handleCancel}>do not create</Button>
				<Button onClick={handleCreate}>create</Button>
			</ButtonContainer>
		</Modal>
	);
};

export default CreateRoomModal;
