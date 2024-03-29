import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import Card from '~/components/Card/Card';

export interface ParticipantCardProps {
	id: string;
	name: string;
	part: string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({
	id,
	name,
	part,
}) => {
	return (
		<Card>
			<AccountCircle fontSize="large" fill="currentColor" />
			<div className="hidden">{id}</div>
			<div className="text-sm mt-1">{name}</div>
			<div className="text-xs">&lt;{part}&gt;</div>
		</Card>
	);
};

export default ParticipantCard;
