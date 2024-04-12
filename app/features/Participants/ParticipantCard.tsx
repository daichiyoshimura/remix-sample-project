import { AccountCircle } from '@mui/icons-material';
import { Card } from '@components';
import { NoSsr } from '@mui/base';

export type ParticipantCardProps = {
	id: string;
	name: string;
	part: string;
};

export const ParticipantCard: React.FC<ParticipantCardProps> = ({ id, name, part }) => {
	return (
		<Card>
			<NoSsr>
				<AccountCircle fontSize="large" fill="currentColor" />
			</NoSsr>
			<div className="hidden">{id}</div>
			<div className="text-sm mt-1">{name}</div>
			<div className="text-xs">&lt;{part}&gt;</div>
		</Card>
	);
};
