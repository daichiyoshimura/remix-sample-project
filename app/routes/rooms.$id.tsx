import {
	ActionFunction,
	ActionFunctionArgs,
	LoaderFunction,
	json,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import RoomProfile, { RoomProfileProps } from '~/features/Rooms/RoomProfile';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import ContentArea from '~/components/ContentArea/ContentArea';
import Box from '~/components/Box/Box';
import LinkButton from '~/components/Button/LinkButton';
import Button from '~/components/Button/Button';
import Container from '~/components/Container/Container';
import ParticipantCardList, {
	ParticipantCardListProps,
} from '~/features/Participants/ParticipantCardList';
import { GetParticipantsMock } from '~/loaders/participants';
import { GetRoomMock } from '~/loaders/rooms';
import { useState } from 'react';
import DeleteRoomModal from '~/features/Rooms/DeleteRoomModal';
import LoadingIcon from '~/components/LoadingIcon/LoadingIcon';
import EditRoomModal from '~/features/Rooms/EditRoomModal';

export const loader: LoaderFunction = async ({ params }) => {
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
		return json(
			{
				...roomProfileProps,
				...participantCardListProps,
			},
			200,
		);
	} catch (error) {
		console.error('Error fetching data:', error);
		throw new Response('Oh no! Something went wrong!', {
			status: 500,
		});
	}
};

export const action: ActionFunction = async ({
	request,
}: ActionFunctionArgs) => {
	const body = await request.text();
	switch (request.method) {
		case 'DELETE':
			console.log('DELETE:' + body);
			return json({ message: 'success' }, 200);
		case 'PATCH':
			console.log('PATCH:' + body);
			return json({ message: 'success' }, 200);
		default:
			return json({ message: 'invalid method' }, 400);
	}
};

const RoomProfilePage = () => {
	const loaderData = useLoaderData<typeof loader>();

	const [isEditRoomModalOpen, setIsEditRoomModalOpen] = useState(false);
	const toggleEditRoomModal = () => {
		setIsEditRoomModalOpen(!isEditRoomModalOpen);
	};

	const [isDeleteRoomModalOpen, setIsDeleteRoomModalOpen] = useState(false);
	const toggleDeleteRoomModal = () => {
		setIsDeleteRoomModalOpen(!isDeleteRoomModalOpen);
	};

	if (
		!loaderData ||
		!loaderData.id ||
		!loaderData.name ||
		!loaderData.createdAt ||
		!loaderData.participants
	) {
		return <LoadingIcon />;
	}
	const { participants, id, name, createdAt } = loaderData;

	return (
		<>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<Box>
					<RoomProfile
						id={id}
						name={name}
						createdAt={createdAt}
						onClick={toggleEditRoomModal}
					/>
					<EditRoomModal
						isOpen={isEditRoomModalOpen}
						onClose={toggleEditRoomModal}
						name={name}
						roomId={id}
					/>
				</Box>
				<Box>
					<ParticipantCardList participants={participants} />
				</Box>
				<Container>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button color={'caution'} onClick={toggleDeleteRoomModal}>
						Delete This Room
					</Button>
				</Container>
				<DeleteRoomModal
					isOpen={isDeleteRoomModalOpen}
					onClose={toggleDeleteRoomModal}
					name={name}
					roomId={id}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
