import { FlexStart, ImageBox } from '@components';

export type ParticipantProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const ParticipantProfile = ({ id, name, createdAt }: ParticipantProfileProps) => {
	return (
		<FlexStart>
			<ImageBox url={''} />
			<div className="flex flex-col w-full">
				<h2 className="text-lg font-semibold">{name}</h2>
				<p>ID: {id}</p>
				<p>Created At: {createdAt}</p>
			</div>
		</FlexStart>
	);
};
