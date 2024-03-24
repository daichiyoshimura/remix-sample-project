import Button from './Button';
import LinkButton from './LinkButton';

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
			<div className="button-container">
				<LinkButton to="/rooms">Back</LinkButton>
				<Button
					onClick={function (): void {
						throw new Error('Function not implemented.');
					}}
				>
					Create Room
				</Button>
			</div>
		</>
	);
};

export default RoomProfile;
