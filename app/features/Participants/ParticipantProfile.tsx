import { ImageBox } from '@components';

export type ParticipantProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const ParticipantProfile = ({ id, name, createdAt }: ParticipantProfileProps) => {
	return (
		<div
			className={`px-8 w-full h-full flex justify-start align-middle gap-x-4 fixed z-10 bg-gray-100`}
		>
			<div className="shrink-0">
				<ImageBox url={''} />
			</div>
			<div className="grow flex flex-col">
				<h2 className="text-lg font-semibold">{name}</h2>
				<p>ID: {id}</p>
				<p>Created At: {createdAt}</p>
			</div>
		</div>
	);
};
