import { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { roomsAction } from '@actions';
import { RoomsLoaderResponse, roomsLoader } from '@loaders';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { RoomCardList } from '@features';
import { CreateRoomModal } from '@features/Rooms/V2/CreateRoomModal';
import { DeleteRoomModal } from '@features/Rooms/V2/DeleteRoomModal';
import { isDefined } from '@util/typeGuards';

export const loader = roomsLoader;

export const action = roomsAction;

const RoomsPage = () => {
	const [isCreateRoomModalOpen, toggleCreateRoomModalOpen] = useBinaryState(false);
	const [isDeleteRoomModalOpen, setDeleteRoomModalOpen] = useState<boolean>(false);
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const isDeleted = searchParams.get('deleted');
	useEffect(() => {
		if (isDeleted == null) {
			setDeleteRoomModalOpen(false);
			return;
		}
		setDeleteRoomModalOpen(true);
	}, [isDeleted]);

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
				<DeleteRoomModal
					isOpen={isDeleteRoomModalOpen}
					onClose={() => setDeleteRoomModalOpen(false)}
					state={isDeleted !== undefined ? 'success' : 'init'}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
