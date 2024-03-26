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

// participants.server.ts をインポート
import { GetParticipantsMock } from '../loaders/participants.server';

export const loader: LoaderFunction = async ({ params }) => {
	const id = params.id as string;

	// GetParticipants 関数を呼び出して参加者データを取得
	const participantCardListProps: ParticipantCardListProps =
		await GetParticipantsMock({ roomId: id });

	const roomProfileProps: RoomProfileProps = {
		id,
		name: `Room ${id}`,
		createdAt: '2024-03-24 00:53:00',
		createdBy: 'Owner',
	};

	return {
		...roomProfileProps,
		...participantCardListProps,
	};
};

const RoomProfilePage = () => {
	const roomProfilePageProps: RoomProfileProps & ParticipantCardListProps =
		useLoaderData();

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
