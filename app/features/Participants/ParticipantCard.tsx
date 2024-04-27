import { AccountIcon, Card } from '@components';

export type ParticipantCardProps = {
	id: string;
	name: string;
};

export const ParticipantCard = ({ id, name }: ParticipantCardProps) => {
	return (
		<Card>
			<AccountIcon />
			<div className="hidden">{id}</div>
			<div className="text-sm mt-1">{name}</div>
		</Card>
	);
};
