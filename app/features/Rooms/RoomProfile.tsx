import React, { useState } from 'react';
import { MeetingRoom } from '@mui/icons-material';
import EditButton from '~/components/Button/EditButton';

export interface RoomProfileProps {
	id: string;
	name: string;
	createdAt: string;
}

const RoomProfile: React.FC<RoomProfileProps & { onClick: () => void }> = ({
	id,
	name,
	createdAt,
	onClick,
}) => {
	return (
		<>
			<div className="flex items-center">
				<MeetingRoom
					className="mr-4 flex-shrink-0"
					fontSize="large"
					fill="currentColor"
				/>
				<div className="flex flex-col">
					<div className="flex items-center space-x-2">
						<h2 className="text-lg font-semibold">{name}</h2>
						<EditButton onClick={onClick} />
					</div>
					<p>ID: {id}</p>
					<p>Created At: {createdAt}</p>
				</div>
			</div>
		</>
	);
};

export default RoomProfile;
