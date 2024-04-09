import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { isDefined } from '@util';
import { roomAction } from '@actions';
import { roomLoader } from '@loaders';
import { Box, Button, LinkButton, Container, ContentArea, Footer, Header } from '@components';
import { ParticipantCardList, EditRoomModal, RoomProfile, DeleteRoomModal } from '@features';

export const loader = roomLoader;

export const action = roomAction;

const RoomProfilePage = () => {
	const { roomProfile } = useLoaderData<typeof loader>();

	const {
		state: isEditRoomModalOpen,
		on: openEditRoomModal,
		off: closeEditRoomModal,
	} = useBinaryState(false);
	const {
		state: isDeleteRoomModalOpen,
		on: openDeleteRoomModal,
		off: closeDeleteRoomModal,
	} = useBinaryState(false);

	if (!isDefined(roomProfile)) {
		// TODO Error Page
		return <></>;
	}
	const { id, name, createdAt, participants } = roomProfile;

	return (
		<>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<Box>
					<RoomProfile
						id={id}
						name={name}
						createdAt={createdAt}
						onClick={openEditRoomModal}
					/>
				</Box>
				<Box>
					<ParticipantCardList participants={participants} />
				</Box>
				<Container>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button color="caution" onClick={openDeleteRoomModal}>
						Delete This Room
					</Button>
				</Container>
				<DeleteRoomModal
					isOpen={isDeleteRoomModalOpen}
					onClose={closeDeleteRoomModal}
					roomId={id}
				/>
				<EditRoomModal
					isOpen={isEditRoomModalOpen}
					onClose={closeEditRoomModal}
					roomId={id}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
