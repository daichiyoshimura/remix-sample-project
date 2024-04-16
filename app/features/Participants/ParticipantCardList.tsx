import { ParticipantCard, ParticipantCardProps } from '@features';

export type ParticipantCardListProps = {
	participants: ParticipantCardProps[];
};

export const ParticipantCardList = ({ participants }: ParticipantCardListProps) => {
	return (
		<div className="max-w-screen-lg mx-auto">
			<div className="grid grid-cols-3 gap-4">
				{participants.map((participant) => (
					<ParticipantCard
						key={participant.id}
						id={participant.id}
						name={participant.name}
						part={participant.part}
					/>
				))}
			</div>
		</div>
	);
};
