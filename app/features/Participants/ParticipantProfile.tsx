import { ImageBox } from '@components';

export type ParticipantProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const ParticipantProfile = ({ id, name, createdAt }: ParticipantProfileProps) => {
	return (
		<div className={`w-full flex justify-start align-middle gap-x-4 fixed`}>
			<ImageBox url={''} />
			<div className="flex flex-col w-full">
				<h2 className="text-lg font-semibold">{name}</h2>
				<p>ID: {id}</p>
				<p>Created At: {createdAt}</p>
			</div>
		</div>
	);
};
