import React from 'react';
import RoomCard, { RoomCardProps } from './RoomCard';

export interface RoomCardListProps {
	rooms: RoomCardProps[];
}

const RoomCardList: React.FC<RoomCardListProps> = ({ rooms }) => {
	return (
		<div className="space-y-4">
			{rooms.map((room) => (
				<RoomCard
					key={room.id}
					id={room.id}
					name={room.name}
					createdAt={room.createdAt}
				/>
			))}
		</div>
	);
};

export default RoomCardList;
