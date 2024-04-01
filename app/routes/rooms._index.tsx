import { useState } from 'react';
import { useLoaderData } from '@remix-run/react';
import { roomsActionMock } from '~/actions/roomsAction.server';
import { RoomsResponse, roomsLoaderMock } from '~/loaders/roomsLoader.server';

import RoomCardList from '~/features/Rooms/RoomCardList';
import Header from '~/components/Header/Header';
import Box from '~/components/Box/Box';
import Footer from '~/components/Footer/Footer';
import ContentArea from '~/components/ContentArea/ContentArea';
import Container from '~/components/Container/Container';
import Button from '~/components/Button/Button';
import CreateRoomModal from '~/features/Rooms/CreateRoomModal';

export const loader = roomsLoaderMock;

export const action = roomsActionMock;

const RoomsPage = () => {
	const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
	const { rooms } = useLoaderData<RoomsResponse>();

	const toggleCreateRoomModal = () => {
		setIsCreateRoomModalOpen(!isCreateRoomModalOpen);
	};

	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Box>
					<RoomCardList rooms={rooms} />
				</Box>
				<Container>
					<Button onClick={toggleCreateRoomModal}>Create Room</Button>
				</Container>
				<CreateRoomModal
					isOpen={isCreateRoomModalOpen}
					onClose={toggleCreateRoomModal}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
