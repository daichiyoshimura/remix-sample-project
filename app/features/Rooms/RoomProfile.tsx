import React, { useState } from 'react';
import { MeetingRoom } from '@mui/icons-material';
import TextInput from '~/components/TextInput/TextInput';
import EditButton from '~/components/Button/EditButton';
import SaveButton from '~/components/Button/SaveButton';

export interface RoomProfileProps {
	id: string;
	name: string;
	createdAt: string;
}

const RoomProfile: React.FC<RoomProfileProps> = ({ id, name, createdAt }) => {
	const [editing, setEditing] = useState(false);
	const [editedName, setEditedName] = useState(name);

	const handleEditClick = () => {
		setEditing(true);
	};

	const handleSaveClick = () => {
		// サーバーサイドへのHTTPリクエストを行う処理を追加する

		// 保存後の状態に戻す
		setEditing(false);
		// TextInputに入力されたテキストをnameとして更新
		// setEditedName(name); // この行を削除します
	};

	const handleChange = (value: string) => {
		setEditedName(value);
	};

	return (
		<div className="flex items-center">
			<MeetingRoom
				className="mr-4 flex-shrink-0"
				fontSize="large"
				fill="currentColor"
			/>
			<div className="flex flex-col">
				<div className="flex items-center space-x-2">
					{editing ? (
						<TextInput
							value={editedName}
							onChange={handleChange}
							placeholder="Room Name"
							required
						/>
					) : (
						<h2 className="text-lg font-semibold">{editedName}</h2>
					)}
					{editing ? (
						<SaveButton onClick={handleSaveClick} />
					) : (
						<EditButton onClick={handleEditClick} />
					)}
				</div>
				<p>ID: {id}</p>
				<p>Created At: {createdAt}</p>
			</div>
		</div>
	);
};

export default RoomProfile;
