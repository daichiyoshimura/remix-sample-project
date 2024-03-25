import React from 'react';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

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
	createdAt,
	createdBy,
}) => {
	return (
		<div className="flex items-center">
			<MeetingRoomIcon
				className="mr-4 flex-shrink-0"
				fontSize="large"
				fill="currentColor"
			/>
			<div>
				<h2 className="text-lg font-semibold">{name}</h2>
				<p>ID: {id}</p>
				<p>Created At: {createdAt}</p>
				<p>Created By: {createdBy}</p>
			</div>
		</div>
	);
};

export default RoomProfile;
