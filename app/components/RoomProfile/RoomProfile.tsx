import React, { useState } from 'react';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextInput from '~/components/TextInput/TextInput';
import Button from '~/components/Button/Button';

export interface RoomProfileProps {
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const RoomProfile: React.FC<RoomProfileProps> = ({
	id,
	name,
	imageUrl,
	createdAt,
	createdBy,
}) => {
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
			<MeetingRoomIcon
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
							className="mr-2"
							required
						/>
					) : (
						<h2 className="text-lg font-semibold">{editedName}</h2>
					)}
					{editing ? (
						<Button
							onClick={handleSaveClick}
							color="blue"
							className="p-0 bg-blue-100 text-blue-500 max-w-max"
						>
							<CheckCircleIcon />
						</Button>
					) : (
						<Button
							onClick={handleEditClick}
							color="blue"
							className="p-0 bg-blue-100 text-blue-500 max-w-max"
						>
							<EditIcon />
						</Button>
					)}
				</div>
				<p>ID: {id}</p>
				<p>Created At: {createdAt}</p>
				<p>Created By: {createdBy}</p>
			</div>
		</div>
	);
};

export default RoomProfile;
