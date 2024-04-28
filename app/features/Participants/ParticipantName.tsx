import { DescriptionText, FlexCenter } from '@components';

export type ParticipantNameProps = {
	id: string;
	name: string;
};

export const ParticipantName = ({ id, name }: ParticipantNameProps) => {
	return (
		<FlexCenter>
			<div className="hidden">{id}</div>
			<DescriptionText description={name} />
		</FlexCenter>
	);
};
