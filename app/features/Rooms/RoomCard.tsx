import React from 'react';
import LinkButton from '~/components/Button/LinkButton';

export interface RoomCardProps {
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
	id,
	name,
	imageUrl,
	createdAt,
	createdBy,
}) => {
	return (
		<div className="max-w-full bg-darkslategray rounded overflow-hidden shadow-md flex room-container">
			{imageUrl && <img className="w-1/5" src={imageUrl} alt={name} />}
			<div className="flex-1 flex flex-col justify-between p-6 room-details text-white">
				<div className="font-bold text-xl mb-2 room-name">{name}</div>
				<div className="text-sm mb-2 room-info">
					Created at: {createdAt}
				</div>
				<div className="text-sm mb-2 room-info">
					Created by: {createdBy}
				</div>
			</div>
			<div className="flex items-center room-actions">
				<LinkButton to={`/rooms/${id}`}>Enter</LinkButton>
			</div>
		</div>
	);
};

export default RoomCard;
