import { useLoaderData } from '@remix-run/react';
import { useBinaryState, useFadeEffect } from '@hooks';
import { roomProfilePageAction } from '@actions';
import { roomProfilePageLoader } from '@loaders';
import { Box, Button, LinkButton, Container } from '@components';
import { ParticipantCardList, EditRoomModal, RoomProfile, DeleteRoomModal } from '@features';

export const loader = roomProfilePageLoader;

export const action = roomProfilePageAction;

const RoomProfilePage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if ('message' in loaderData) {
		throw Error(loaderData.message);
	}
	const { id, name, createdAt, participants } = loaderData;

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

	return (
		<>
			<div className={useFadeEffect()}>
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
					name={name}
				/>
				<EditRoomModal
					isOpen={isEditRoomModalOpen}
					onClose={closeEditRoomModal}
					roomId={id}
				/>
			</div>
		</>
	);
};

export default RoomProfilePage;
