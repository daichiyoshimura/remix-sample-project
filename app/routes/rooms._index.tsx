import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { useFadeEffect } from '@hooks/useFadeEffect';
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

	const [isCreateRoomModalOpen, toggleCreateRoomModal] = useBinaryState(false);

	return (
		<>
			<div className={useFadeEffect()}>
				<Box>
					<RoomCardList rooms={rooms} />
				</Box>
				<Container>
					<Button onClick={toggleCreateRoomModal}>Create Room</Button>
				</Container>
				<CreateRoomModal isOpen={isCreateRoomModalOpen} onClose={toggleCreateRoomModal} />
			</div>
		</>
	);
};

export default RoomListPage;
