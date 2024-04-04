import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks/useBinaryState';
import { roomAction } from '@actions/roomAction.server';
import { RoomProfileResponse, roomLoaderMock } from '@loaders/roomLoader.server';
import { Box, Button, LinkButton, Container, ContentArea, Footer, Header } from '@components';
import { ParticipantCardList, DeleteRoomModal, EditRoomModal, RoomProfile } from '@features';

export const loader = roomLoaderMock;

export const action = roomAction;

const RoomProfilePage = () => {
	const { participants, id, name, createdAt } = useLoaderData<RoomProfileResponse>();
	const [isEditRoomModalOpen, toggleEditRoomModalOpen] = useBinaryState(false);
	const [isDeleteRoomModalOpen, toggleDeleteRoomModalOpen] = useBinaryState(false);

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
