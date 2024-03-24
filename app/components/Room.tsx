import { Link } from '@remix-run/react';
import LinkButton from './LinkButton';

export interface RoomProps {
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const Room = ({ id, name, imageUrl, createdAt, createdBy }: RoomProps) => {
	return (
		<div className="max-w-full rounded overflow-hidden shadow-lg bg-darkslategray text-white flex">
			{imageUrl && <img className="w-1/5" src={imageUrl} alt={name} />}
			<div className="flex-1 flex flex-col justify-between px-6 py-4">
				<div className="font-bold text-xl mb-2">{name}</div>
				<div className="text-sm mb-2">Created at: {createdAt}</div>
				<div className="text-sm mb-2">Created by: {createdBy}</div>
			</div>
			<div className="ml-auto flex items-center">
				<LinkButton to={`/rooms/${id}`} className="mr-4">
					Enter
				</LinkButton>
			</div>
		</div>
	);
};

export default Room;
