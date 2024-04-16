import { RoomIcon, EditButton } from '@components';

export type RoomProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const RoomProfile = (
	{ id, name, createdAt, onClick }: RoomProfileProps & { onClick: () => void },
) => {
	return (
		<>
			<div className="flex items-center">
				<RoomIcon className="mr-4 flex-shrink-0" />
				<div className="flex flex-col">
					<div className="flex items-center space-x-2">
						<h2 className="text-lg font-semibold">{name}</h2>
						<EditButton onClick={onClick} />
					</div>
					<p>ID: {id}</p>
					<p>Created At: {createdAt}</p>
				</div>
			</div>
		</>
	);
};
