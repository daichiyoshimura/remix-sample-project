import React, { useState } from 'react';
import Modal from '~/components/Modal/Modal';
import ButtonContainer from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';

interface DeleteModalProps {
	isOpen: boolean;
	name: string
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, name }) => {
	const [inputValue, setInputValue] = useState('');

	const handleDelete = async () => {
		try {
			const response = await fetch('path/to/delete', {
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
			<h2 className="text-lg font-bold">
				Are you sure you want to delete?
			</h2>
			<p className="text-sm text-gray-600 mb-4">
				To delete, please enter the same name in the textbox below and
				press the delete button.
			</p>
			<TextInput
				value={inputValue}
				onChange={setInputValue}
				placeholder={name}
				required
			/>
			<ButtonContainer>
				<Button onClick={handleCancel}>do not delete</Button>
				<Button
					onClick={handleDelete}
					warning={true}
					disabled={inputValue !== name}
				>
					delete
				</Button>
			</ButtonContainer>
		</Modal>
	);
};

export default DeleteModal;
