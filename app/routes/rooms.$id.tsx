import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks/useBinaryState';
import { roomActionMock } from '@actions/roomAction.server';
import { RoomProfileResponse, roomLoaderMock } from '@loaders/roomLoader.server';
import Box from '@components/Box/Box';
import Button from '@components/Button/Button';
import LinkButton from '@components/Button/LinkButton';
import Container from '@components/Container/Container';
import ContentArea from '@components/ContentArea/ContentArea';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import LoadingIcon from '@components/LoadingIcon/LoadingIcon';
import ParticipantCardList from '@features/Participants/ParticipantCardList';
import DeleteRoomModal from '@features/Rooms/DeleteRoomModal';
import EditRoomModal from '@features/Rooms/EditRoomModal';
import RoomProfile from '@features/Rooms/RoomProfile';

export const loader = roomLoaderMock;

export const action = roomActionMock;

const RoomProfilePage = () => {
	const loaderData = useLoaderData<RoomProfileResponse>();
	const [isEditRoomModalOpen, toggleEditRoomModalOpen] = useBinaryState(false);
	const [isDeleteRoomModalOpen, toggleDeleteRoomModalOpen] = useBinaryState(false);

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
						onClick={toggleEditRoomModalOpen}
					/>
					<EditRoomModal
						isOpen={isEditRoomModalOpen}
						onClose={toggleEditRoomModalOpen}
						name={name}
						roomId={id}
					/>
				</Box>
				<Box>
					<ParticipantCardList participants={participants} />
				</Box>
				<Container>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button color={'caution'} onClick={toggleDeleteRoomModalOpen}>
						Delete This Room
					</Button>
				</Container>
				<DeleteRoomModal
					isOpen={isDeleteRoomModalOpen}
					onClose={toggleDeleteRoomModalOpen}
					name={name}
					roomId={id}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
