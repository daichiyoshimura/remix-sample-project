import { Link } from '@remix-run/react';

export interface RoomProps {
	id: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	createdBy: string;
}

const Room = ({ id, name, imageUrl, createdAt, createdBy }: RoomProps) => {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg flex">
			{imageUrl && <img className="w-1/5" src={imageUrl} alt={name} />}
			<div className="w-3/5 flex flex-col justify-between px-6 py-4 bg-darkslategray text-white">
				<div className="font-bold text-xl mb-2">{name}</div>
				<div className="text-sm mb-2">Created at: {createdAt}</div>
				<div className="text-sm mb-2">Created by: {createdBy}</div>
			</div>
			<div className="w-1/5 flex items-center justify-center">
				<Link
					to={`/rooms/${id}`}
					className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50"
				>
					Enter
				</Link>
			</div>
		</div>
	);
};

export default Room;
