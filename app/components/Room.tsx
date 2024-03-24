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
		<div className="max-w-full rounded overflow-hidden shadow-lg bg-darkslategray text-white flex">
			{imageUrl && <img className="w-1/5" src={imageUrl} alt={name} />}
			<div className="flex-1 flex flex-col justify-between px-6 py-4">
				<div className="font-bold text-xl mb-2">{name}</div>
				<div className="text-sm mb-2">Created at: {createdAt}</div>
				<div className="text-sm mb-2">Created by: {createdBy}</div>
			</div>
			<div className="w-1/6 flex items-center justify-end pr-4">
				<Link
					to={`/rooms/${id}`}
					className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50 hover:text-black"
				>
					Enter
				</Link>
			</div>
		</div>
	);
};

export default Room;
