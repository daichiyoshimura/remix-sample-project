import { useActionData, useLoaderData } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { Message, isDefined } from '@util';
import { roomsAction } from '@actions';
import { roomsLoader } from '@loaders';
import { Box, Button, Container, ContentArea, Footer, Header } from '@components';
import { RoomCardList, CreateRoomModal } from '@features';

export const loader = roomsLoader;

export const action = roomsAction;

const RoomsPage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if (isDefined<Message>(loaderData)) {
		throw Error(loaderData.message);
	}
	const { rooms } = loaderData;
	const actionData = useActionData<typeof action>();
	const serverErrorMessageList = isDefined<Message>(actionData) ? [actionData.message] : [];
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
				<CreateRoomModal
					isOpen={isCreateRoomModalOpen}
					onClose={closeCreateRoomModal}
					serverErrorMessageList={serverErrorMessageList}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
