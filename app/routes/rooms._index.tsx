import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks/useBinaryState';
import { roomsActionMock } from '@actions/roomsAction.server';
import { RoomsResponse, roomsLoaderMock } from '@loaders/roomsLoader.server';
import Box from '@components/Box/Box';
import Button from '@components/Button/Button';
import Container from '@components/Container/Container';
import ContentArea from '@components/ContentArea/ContentArea';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import CreateRoomModal from '@features/Rooms/CreateRoomModal';
import RoomCardList from '@features/Rooms/RoomCardList';

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
