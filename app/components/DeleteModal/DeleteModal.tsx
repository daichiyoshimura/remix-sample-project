import React, { useState } from 'react';
import Modal from '~/components/Modal/Modal';
import ButtonContainer from '~/components/Container/Container';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';

interface DeleteModalProps {
	isOpen: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen }) => {
	const [roomName, setRoomName] = useState('');
	const [inputValue, setInputValue] = useState('');

	const handleDelete = async () => {
		try {
			const response = await fetch('/delete-room', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ roomName }),
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
		setRoomName('');
		setInputValue('');
	};

	return (
		<Modal isOpen={isOpen} onClose={handleCancel}>
			<h2 className="text-lg font-bold">本当に削除しますか？</h2>
			<p className="text-sm text-gray-600 mb-4">
				削除するためには下記のテキストボックスにRoom名を入力して削除ボタンを押してください
			</p>
			<TextInput
				value={roomName}
				onChange={setRoomName}
				placeholder="Room名"
				className="mb-4"
				required
			/>
			<ButtonContainer>
				<Button onClick={handleCancel}>キャンセル</Button>
				<Button
					onClick={handleDelete}
					warning={true}
					disabled={inputValue !== roomName}
				>
					削除
				</Button>
			</ButtonContainer>
		</Modal>
	);
};

export default DeleteModal;
