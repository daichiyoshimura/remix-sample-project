import { useEffect } from 'react';
import { useLoaderData, useNavigation } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { roomsAction } from '@actions';
import { RoomsLoaderResponse, roomsLoader } from '@loaders';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { RoomCardList } from '@features';
import { CreateRoomModal } from '@features/Rooms/V2/CreateRoomModal';
import { isDefined } from '@util/typeGuards';

export const loader = roomsLoader;

export const action = roomsAction;

const RoomsPage = () => {
	const [isCreateRoomModalOpen, toggleCreateRoomModalOpen] = useBinaryState(false);

	const state = useNavigation().state;
	useEffect(() => {
		switch (state) {
			case 'idle':
			case 'loading':
			case 'submitting':
			default:
				return;
		}
	}, [state]);

	const { rooms } = useLoaderData<RoomsLoaderResponse>();
	if (!isDefined(rooms)) {
		return <></>;
	}

	return (
		<>
			<Header currentPageTitle="Rooms" />
			<ContentArea>
				<Box>
					<RoomCardList rooms={isDefined(rooms) ? rooms : []} />
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
