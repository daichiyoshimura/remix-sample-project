import React from 'react';

export interface RoomProfileProps {
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const RoomProfile: React.FC<RoomProfileProps> = ({
	id,
	name
}) => {
	return (
		<>
			<div>
				<h2>{name}</h2>
				<p>ID: {id}</p>
			</div>
		</>
	);
};

export default RoomProfile;
