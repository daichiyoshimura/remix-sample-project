import React, { useState } from 'react';
import Modal from '~/components/Modal/Modal';
import ButtonContainer from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';

interface DeleteModalProps {
	isOpen: boolean;
	pathToDelete: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, pathToDelete }) => {
	const [name, setName] = useState('');
	const [inputValue, setInputValue] = useState('');

	const handleDelete = async () => {
		try {
			const response = await fetch(pathToDelete, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name }),
			});

			if (response.ok) {
				// 削除が成功した場合の処理を記述
			} else {
				// 削除が失敗した場合の処理を記述
			}
		} catch (error) {
			// エラー処理を記述
			console.error(
				'削除リクエストの送信中にエラーが発生しました:',
				error,
			);
		}
	};

	const handleCancel = () => {
		setName('');
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
				value={name}
				onChange={setName}
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
