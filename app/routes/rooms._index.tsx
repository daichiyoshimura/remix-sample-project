import { useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { isDefined } from '@util';
import { roomsAction } from '@actions';
import { roomsLoader } from '@loaders';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { RoomCardList, CreateRoomModal } from '@features';

export const loader = roomsLoader;

export const action = roomsAction;

const RoomsPage = () => {
	const loaderData = useLoaderData<typeof loader>();

	const [isCreateRoomModalOpen, toggleCreateRoomModalOpen] = useBinaryState(false);

	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Box>
					<RoomCardList
						rooms={
							isDefined(loaderData) && isDefined(loaderData.rooms)
								? loaderData.rooms
								: []
						}
					/>
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
