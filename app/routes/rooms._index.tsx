import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks/useBinaryState';
import { roomsAction } from '@actions/roomsAction.server';
import { RoomsResponse, roomsLoader } from '@loaders/roomsLoader.server';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { CreateRoomModal, RoomCardList } from '@features';

export const loader = roomsLoader;

export const action = roomsAction;

const RoomsPage = () => {
	const { rooms } = useLoaderData<RoomsResponse>();
	const [isCreateRoomModalOpen, toggleCreateRoomModalOpen] = useBinaryState(false);

	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Box>
					<RoomCardList rooms={rooms} />
				</Box>
				<Container>
					<Button onClick={toggleCreateRoomModalOpen}>Create Room</Button>
				</Container>
				<CreateRoomModal
					isOpen={isCreateRoomModalOpen}
					onClose={toggleCreateRoomModalOpen}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
