import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import RoomProfile, {
	RoomProfileProps,
} from '~/components/RoomProfile/RoomProfile';
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
import { GetParticipantsMock } from '~/loaders/participants';
import { GetRoomMock } from '~/loaders/rooms';

type LoaderData = RoomProfileProps & ParticipantCardListProps;

export const loader: LoaderFunction = async ({
	params,
}): Promise<LoaderData> => {
	try {
		const id = params.id as string;

		// Get room profile props
		const roomProfileProps: RoomProfileProps = await GetRoomMock({
			roomId: id,
		});

		// Get participant card list props
		const participantCardListProps: ParticipantCardListProps =
			await GetParticipantsMock({ roomId: id });

		// Return props if both requests succeed
		return {
			...roomProfileProps,
			...participantCardListProps,
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		throw new Response('Oh no! Something went wrong!', {
			status: 500,
		});
	}
};

const RoomProfilePage = () => {
	const loaderData: LoaderData = useLoaderData<LoaderData>();

	// Check if both room profile and participant card list data exist
	if (
		!loaderData ||
		!loaderData.id ||
		!loaderData.name ||
		!loaderData.createdAt ||
		!loaderData.createdBy ||
		!loaderData.participants
	) {
		// If any of the data is missing, display a loading indicator or error message
		return <div>Loading...</div>;
	}

	const { participants, id, name, createdAt, createdBy } = loaderData;
	console.log('Participant Props:', participants);

	return (
		<>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<Box>
					<RoomProfile
						id={id}
						name={name}
						createdAt={createdAt}
						createdBy={createdBy}
					/>
				</Box>
				<Box>
					<ParticipantCardList participants={participants} />
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
