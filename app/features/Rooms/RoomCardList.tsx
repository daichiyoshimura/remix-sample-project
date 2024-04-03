import { RoomCard, RoomCardProps } from '@features';

export type RoomCardListProps = {
	rooms: RoomCardProps[];
};

export const RoomCardList: React.FC<RoomCardListProps> = ({ rooms }) => {
	return (
		<div className="space-y-4">
			{rooms.map((room) => (
				<RoomCard key={room.id} id={room.id} name={room.name} createdAt={room.createdAt} />
			))}
		</div>
	);
};
