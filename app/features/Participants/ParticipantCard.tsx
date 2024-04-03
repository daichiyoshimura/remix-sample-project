import { AccountCircle } from '@mui/icons-material';
import { Card } from '@components';

export type ParticipantCardProps = {
	id: string;
	name: string;
	part: string;
};

export const ParticipantCard: React.FC<ParticipantCardProps> = ({ id, name, part }) => {
	return (
		<Card>
			<AccountCircle fontSize="large" fill="currentColor" />
			<div className="hidden">{id}</div>
			<div className="text-sm mt-1">{name}</div>
			<div className="text-xs">&lt;{part}&gt;</div>
		</Card>
	);
};
