import { AccountIcon } from '@components';

export type ParticipantGridItemProps = {
	id: string;
	name: string;
};

export const ParticipantGridItem = ({ id, name }: ParticipantGridItemProps) => {
	return (
		<div className="col-span-1 rounded bg-primary text-white w-full flex flex-col justify-center">
			<div className={`w-full flex justify-center align-middle gap-x-4`}>
				<AccountIcon />
			</div>
			<div className={`w-full flex justify-center align-middle gap-x-4`}>{id}</div>
			<div className={`w-full flex justify-center align-middle gap-x-4`}>
				<div className="text-sm mt-1">{name}</div>
			</div>
		</div>
	);
};
