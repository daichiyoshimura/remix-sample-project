export interface RoomProfileProps {
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const RoomProfile = ({
	id,
	name,
	imageUrl,
	createdAt,
	createdBy,
}: RoomProfileProps) => {
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
