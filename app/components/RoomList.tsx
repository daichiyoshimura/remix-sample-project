import Room, { RoomProps } from './Room';

export interface RoomListProps {
	rooms: RoomProps[];
}

const RoomList = ({ rooms }: RoomListProps) => {
	return (
		<div className="space-y-4">
			{rooms.map((room) => (
				<Room
					key={room.id}
					id={room.id}
					name={room.name}
					createdAt={room.createdAt}
					createdBy={room.createdBy}
				/>
			))}
		</div>
	);
};

export default RoomList;
