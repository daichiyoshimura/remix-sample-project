import LinkButton from '~/components/Button/LinkButton';

export type RoomCardProps = {
	id: string;
	name: string;
	createdAt: string;
};

const RoomCard: React.FC<RoomCardProps> = ({ id, name, createdAt }) => {
	return (
		<div className="max-w-full bg-darkslategray rounded overflow-hidden shadow-md flex room-container p-4">
			<div className="flex-1 flex flex-col justify-between pr-2 pl-2 room-details text-white">
				<div className="font-bold text-xl mb-2 room-name">{name}</div>
				<div className="text-sm mb-2 room-info">Created at: {createdAt}</div>
			</div>
			<div className="flex items-center room-actions pr-2 pl-2">
				<LinkButton to={`/rooms/${id}`}>Enter</LinkButton>
			</div>
		</div>
	);
};

export default RoomCard;
