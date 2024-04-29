import { DescriptionText, FlexStart } from '@components';

export type ParticipantNameProps = {
	id: string;
	name: string;
};

export const ParticipantName = ({ id, name }: ParticipantNameProps) => {
	return (
		<FlexStart className={'p-4'}>
			<div className="hidden">{id}</div>
			<DescriptionText description={name} />
		</FlexStart>
	);
};
