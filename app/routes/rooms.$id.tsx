import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import RoomProfile, {
	RoomProfileProps,
} from '../components/RoomProfile/RoomProfile';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import ContentArea from '~/components/ContentArea/ContentArea';
import Box from '~/components/Box/Box';
import LinkButton from '~/components/LinkButton/LinkButton';
import Button from '~/components/Button/Button';
import ButtonContainer from '~/components/ButtonContainer/ButtonContainer';
import ParticipantCardList, {
	ParticipantCardListProps,
} from '~/components/ParticipantCardList/ParticipantCardList';
import { GetParticipantsMock } from '~/loaders/participants.server';
import { GetRoomMock } from '~/loaders/rooms.server';

export const loader: LoaderFunction = async ({ params }) => {
	const id = params.id as string;

	const participantCardListProps: ParticipantCardListProps =
		await GetParticipantsMock({ roomId: id });

	const roomProfileProps: RoomProfileProps = await GetRoomMock({
		roomId: id,
	});

	return {
		...roomProfileProps,
		...participantCardListProps,
	};
};

const RoomProfilePage = () => {
	const roomProfilePageProps =
		useLoaderData<RoomProfileProps & ParticipantCardListProps>();

	return (
		<>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<Box>
					<RoomProfile
						id={roomProfilePageProps.id}
						name={roomProfilePageProps.name}
						createdAt={roomProfilePageProps.createdAt}
						createdBy={roomProfilePageProps.createdBy}
					/>
				</Box>
				<Box>
					<ParticipantCardList
						participants={roomProfilePageProps.participants}
					/>
				</Box>
				<ButtonContainer>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button
						onClick={function (): void {
							throw new Error('Function not implemented.');
						}}
						color="red"
					>
						Delete This Room
					</Button>
				</ButtonContainer>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
