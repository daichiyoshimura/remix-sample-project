export interface RoomProfileProps {
	id: string;
	name: string;
}

const RoomProfile = ({ id, name }: RoomProfileProps) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>ID: {id}</p>
		</div>
	);
};

export default RoomProfile;
