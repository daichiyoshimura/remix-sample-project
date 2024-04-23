import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { Box, Button, LinkButton, Container } from '@components';
import { ParticipantCardList, EditRoomModal, RoomProfile, DeleteRoomModal } from '@features';
import { roomProfilePageAction } from '@server/actions';
import { roomProfilePageLoader } from '@server/loaders';

export const loader = roomProfilePageLoader;

export const action = roomProfilePageAction;

const RoomProfilePage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if ('message' in loaderData) {
		throw Error(loaderData.message);
	}
	const { id, name, createdAt, participants } = loaderData;

	const [isEditRoomModalOpen, toggleEditRoomModal] = useBinaryState(false);
	const [isDeleteRoomModalOpen, toggleDeleteRoomModal] = useBinaryState(false);

	return (
		<>
			<Box>
				<RoomProfile
					id={id}
					name={name}
					createdAt={createdAt}
					onClick={toggleEditRoomModal}
				/>
			</Box>
			<Box>
				<ParticipantCardList participants={participants} />
			</Box>
			<Container>
				<LinkButton to="/rooms">Back</LinkButton>
				<Button color="caution" onClick={toggleDeleteRoomModal}>
					Delete This Room
				</Button>
			</Container>
			<DeleteRoomModal
				isOpen={isDeleteRoomModalOpen}
				onClose={toggleDeleteRoomModal}
				roomId={id}
				name={name}
			/>
			<EditRoomModal isOpen={isEditRoomModalOpen} onClose={toggleEditRoomModal} roomId={id} />
		</>
	);
};

export default RoomProfilePage;
