import React from 'react';
import ParticipantCard, {
	ParticipantCardProps,
} from '../ParticipantCard/ParticipantCard';

export interface ParticipantCardListProps {
	participants: ParticipantCardProps[];
}

const ParticipantCardList: React.FC<ParticipantCardListProps> = ({
	participants,
}) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{participants.map((participant, index) => (
				<ParticipantCard
					key={index}
					name={participant.name}
					part={participant.part}
				/>
			))}
		</div>
	);
};

export default ParticipantCardList;
