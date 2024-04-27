import { RoomIcon, LinkButton, EditIcon, Container } from '@components';

export type RoomProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const RoomProfile = ({ id, name, createdAt }: RoomProfileProps) => {
	return (
		<>
			<Container>
				<div className="w-20">
					<RoomIcon />
				</div>
				<div className="flex flex-col">
					<div>
						<h2 className="text-lg font-semibold">{name}</h2>
						<p>ID: {id}</p>
						<p>Created At: {createdAt}</p>
					</div>
				</div>
				<LinkButton to={'./edit'}>
					<EditIcon />
				</LinkButton>
			</Container>
		</>
	);
};
