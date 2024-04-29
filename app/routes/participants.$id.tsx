import { VerticalFlexStart } from '@components';
import { ParticipantProfile } from '@features/Participants/ParticipantProfile';

const ParticipantProfilePage = () => {
	return (
		<VerticalFlexStart className={'fixed'}>
			<ParticipantProfile id={'qwerty'} name={'Jimmy'} createdAt={'2024-04-29 16:44'} />
		</VerticalFlexStart>
	);
};

export default ParticipantProfilePage;
