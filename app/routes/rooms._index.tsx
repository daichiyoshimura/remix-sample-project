import { useLoaderData } from '@remix-run/react';
import { roomsActionMock } from '@actions/roomsAction.server';
import { RoomsResponse, roomsLoaderMock } from '@loaders/roomsLoader.server';
import { useBinaryState } from '@hooks/useBinaryState';

import RoomCardList from '@features/Rooms/RoomCardList';
import Header from '@components/Header/Header';
import Box from '@components/Box/Box';
import Footer from '@components/Footer/Footer';
import ContentArea from '@components/ContentArea/ContentArea';
import Container from '@components/Container/Container';
import Button from '@components/Button/Button';
import CreateRoomModal from '@features/Rooms/CreateRoomModal';

export const loader = roomsLoaderMock;

export const action = roomsActionMock;

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
