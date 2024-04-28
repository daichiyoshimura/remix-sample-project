import { FlexBetween, RoomIcon } from '@components';

export type RoomProfileProps = {
	id: string;
	name: string;
	createdAt: string;
	LinkButton: JSX.Element;
};

export const RoomProfile = ({ id, name, createdAt, LinkButton }: RoomProfileProps) => {
	return (
		<>
			<FlexBetween>
				<RoomIcon />
				<div className="flex flex-col w-full">
					<h2 className="text-lg font-semibold">{name}</h2>
					<p>ID: {id}</p>
					<p>Created At: {createdAt}</p>
				</div>
				<div className="flex items-center">{LinkButton}</div>
			</FlexBetween>
		</>
	);
};
