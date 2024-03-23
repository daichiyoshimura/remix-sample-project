import Room, { RoomProps } from './Room';

export interface RoomListProps {
	rooms: RoomProps[];
}

const RoomList = ({ rooms }: RoomListProps) => {
	return (
		<div>
			{rooms.map((room) => (
				<Room key={room.id} id={room.id} name={room.name} />
			))}
		</div>
	);
};

export default RoomList;
