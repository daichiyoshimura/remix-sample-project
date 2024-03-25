import React from 'react';
import { ParticipantCardProps } from '../ParticipantCard/ParticipantCard';
import ParticipantCardList from '../ParticipantCardList/ParticipantCardList';

export interface RoomProfileProps {
	participants: ParticipantCardProps[];
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const RoomProfile: React.FC<RoomProfileProps> = ({
	id,
	name,
	participants,
}) => {
	return (
		<>
			<div>
				<h2>{name}</h2>
				<p>ID: {id}</p>
				<ParticipantCardList participants={participants} />
			</div>
		</>
	);
};

export default RoomProfile;
