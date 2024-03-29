import React, { useState } from 'react';
import {
	ActionFunctionArgs,
	type ActionFunction,
	type LoaderFunction,
	json,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import RoomCardList, { RoomCardListProps } from '~/features/Rooms/RoomCardList';
import Header from '~/components/Header/Header';
import Box from '~/components/Box/Box';
import Footer from '~/components/Footer/Footer';
import ContentArea from '~/components/ContentArea/ContentArea';
import Container from '~/components/Container/Container';
import { GetRoomsMock } from '~/loaders/rooms';
import Button from '~/components/Button/Button';
import CreateRoomModal from '~/features/Rooms/CreateRoomModal';

export const loader: LoaderFunction = async () => {
	const roomCardListProps: RoomCardListProps = await GetRoomsMock({
		accountId: '1',
	});
	return roomCardListProps;
};

export const action: ActionFunction = async ({
	request,
}: ActionFunctionArgs) => {
	const body = await request.text();
	console.log(body);
	return json({ message: 'success' }, 200);
};

const RoomsPage = () => {
	const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
	const { rooms } = useLoaderData<RoomCardListProps>();

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
				{isCreateRoomModalOpen && (
					<CreateRoomModal
						isOpen={isCreateRoomModalOpen}
						onClose={toggleCreateRoomModal}
					/>
				)}
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomsPage;
