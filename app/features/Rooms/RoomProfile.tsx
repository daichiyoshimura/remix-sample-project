import { RoomIcon } from '@components';

export type RoomProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const RoomProfile = ({ id, name, createdAt }: RoomProfileProps) => {
	return (
		<div className={`w-full flex justify-between gap-x-4`}>
			<RoomIcon />
			<div className="flex flex-col w-full">
				<h2 className="text-lg font-semibold">{name}</h2>
				<p>ID: {id}</p>
				<p>Created At: {createdAt}</p>
			</div>
		</div>
	);
};
