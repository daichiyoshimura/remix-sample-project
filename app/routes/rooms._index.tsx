import { useEffect, useState } from 'react';
import { useActionData, useLoaderData, useLocation, useNavigate } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { isDefined, isBoolean } from '@util';
import { roomsAction } from '@actions';
import { roomsLoader } from '@loaders';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { RoomCardList, CreateRoomModal, DeleteRoomModal } from '@features';

export const loader = roomsLoader;

export const action = roomsAction;

const RoomsPage = () => {
	const loaderData = useLoaderData<typeof loader>();
	const actionData = useActionData<typeof action>();

	const [isCreateRoomModalOpen, toggleCreateRoomModalOpen] = useBinaryState(false);
	const [isDeleteRoomModalOpen, setDeleteRoomModalOpen] = useState<boolean>(false);
	const { state } = useLocation();
	const navigate = useNavigate();

	// create room modal effect
	useEffect(() => {
		if (!isDefined(actionData) || !isDefined(actionData.room)) return;
		navigate(`${actionData.room.id}`, { state: { isCreated: true } });
		// eslint-disable-next-line
	}, [actionData]);

	// delete room modal effect
	useEffect(() => {
		if (!isDefined(state) || !isBoolean(state.isDeleted)) return;
		const isDeleted = state.isDeleted as boolean;
		setDeleteRoomModalOpen(isDeleted);
	}, [state]);

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
				<DeleteRoomModal
					isOpen={isDeleteRoomModalOpen}
					onClose={() => setDeleteRoomModalOpen(false)}
					state={'success'}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
