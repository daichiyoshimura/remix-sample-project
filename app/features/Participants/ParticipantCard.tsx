import { AccountIcon, Card } from '@components';

export type ParticipantCardProps = {
	id: string;
	name: string;
	part: string;
};

export const ParticipantCard = ({ id, name, part }: ParticipantCardProps) => {
	return (
		<Card>
			<AccountIcon />
			<div className="hidden">{id}</div>
			<div className="text-sm mt-1">{name}</div>
			<div className="text-xs">&lt;{part}&gt;</div>
		</Card>
	);
};
