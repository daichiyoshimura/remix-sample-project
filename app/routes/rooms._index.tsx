import { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { roomListPageAction } from '@actions';
import { roomListPageLoader } from '@loaders';
import { Box, Button, Container } from '@components';
import { RoomCardList, CreateRoomModal } from '@features';

export const loader = roomListPageLoader;

export const action = roomListPageAction;

const RoomListPage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if ('message' in loaderData) {
		throw Error(loaderData.message);
	}
	const { rooms } = loaderData;

	const {
		state: isCreateRoomModalOpen,
		on: openCreateRoomModal,
		off: closeCreateRoomModal,
	} = useBinaryState(false);

	const { state: navState } = useNavigation();
	const [fadeClass, setFadeClass] = useState<string>('');
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
					<RoomCardList rooms={rooms} />
				</Box>
				<Container>
					<Button onClick={openCreateRoomModal}>Create Room</Button>
				</Container>
				<CreateRoomModal isOpen={isCreateRoomModalOpen} onClose={closeCreateRoomModal} />
			</div>
		</>
	);
};

export default RoomListPage;
