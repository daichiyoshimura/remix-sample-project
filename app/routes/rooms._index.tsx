import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { roomsAction } from '@actions';
import { roomsLoader } from '@loaders';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { RoomCardList, CreateRoomModal } from '@features';

export const loader = roomsLoader;

export const action = roomsAction;

const RoomsPage = () => {
	const { rooms } = useLoaderData<typeof loader>();
	const {
		state: isCreateRoomModalOpen,
		on: openCreateRoomModal,
		off: closeCreateRoomModal,
	} = useBinaryState(false);

	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Box>
					<RoomCardList rooms={rooms} />
				</Box>
				<Container>
					<Button onClick={openCreateRoomModal}>Create Room</Button>
				</Container>
				<CreateRoomModal isOpen={isCreateRoomModalOpen} onClose={closeCreateRoomModal} />
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
