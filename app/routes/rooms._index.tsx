import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { roomsPageAction } from '@actions';
import { roomsPageLoader } from '@loaders';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { RoomCardList, CreateRoomModal } from '@features';

export const loader = roomsPageLoader;

export const action = roomsPageAction;

const RoomsPage = () => {
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
