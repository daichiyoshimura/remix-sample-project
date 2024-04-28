import { Grid } from '@components';
import { ParticipantCard, ParticipantCardProps } from '@features';

export type ParticipantCardListProps = {
	participants: ParticipantCardProps[];
};

export const ParticipantCardList = ({ participants }: ParticipantCardListProps) => {
	return (
		<Grid>
			{participants.map((participant) => (
				<ParticipantCard key={participant.id} id={participant.id} name={participant.name} />
			))}
		</Grid>
	);
};
