import { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from '@remix-run/react';
import { useBinaryState } from '@hooks';
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

	const { state: navState } = useNavigation();
	const [fadeClass, setFadeClass] = useState<string>('');
	console.log(navState);
	useEffect(() => {
		if (navState === 'idle' && fadeClass !== 'animate-fade-in') {
			setFadeClass('animate-fade-in');
		}
		if (navState === 'loading' && fadeClass !== 'animate-fade-out') {
			setFadeClass('animate-fade-out');
		}
	}, [navState]);

	return (
		<>
			<div className={fadeClass}>
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
