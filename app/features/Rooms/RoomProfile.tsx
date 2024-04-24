import { RoomIcon, LinkButton, EditIcon } from '@components';

export type RoomProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const RoomProfile = ({ id, name, createdAt }: RoomProfileProps) => {
	return (
		<>
			<div className="flex items-center">
				<RoomIcon className="mr-4 flex-shrink-0" />
				<div className="flex flex-col">
					<div className="flex items-center space-x-2">
						<h2 className="text-lg font-semibold">{name}</h2>
						<LinkButton to={'./edit'}>
							<EditIcon />
						</LinkButton>
					</div>
					<p>ID: {id}</p>
					<p>Created At: {createdAt}</p>
				</div>
			</div>
		</>
	);
};
