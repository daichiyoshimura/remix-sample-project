import LinkButton from '../LinkButton/LinkButton';
import './Room.css';

export interface RoomProps {
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const Room = ({ id, name, imageUrl, createdAt, createdBy }: RoomProps) => {
	return (
		<div className="room-container">
			{imageUrl && (
				<img className="room-image" src={imageUrl} alt={name} />
			)}
			<div className="room-details">
				<div className="room-name">{name}</div>
				<div className="room-info">Created at: {createdAt}</div>
				<div className="room-info">Created by: {createdBy}</div>
			</div>
			<div className="room-actions">
				<LinkButton to={`/rooms/${id}`} className="enter-button">
					Enter
				</LinkButton>
			</div>
		</div>
	);
};

export default Room;
