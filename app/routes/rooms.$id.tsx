import { useLoaderData } from '@remix-run/react';
import RoomProfile from '~/features/Rooms/RoomProfile';
import { useState } from 'react';
import { roomActionMock } from '~/actions/roomAction.server';
import {
	RoomProfileResponse,
	roomLoaderMock,
} from '~/loaders/roomLoader.server';

import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import ContentArea from '~/components/ContentArea/ContentArea';
import Box from '~/components/Box/Box';
import LinkButton from '~/components/Button/LinkButton';
import Button from '~/components/Button/Button';
import Container from '~/components/Container/Container';
import ParticipantCardList from '~/features/Participants/ParticipantCardList';
import DeleteRoomModal from '~/features/Rooms/DeleteRoomModal';
import LoadingIcon from '~/components/LoadingIcon/LoadingIcon';
import EditRoomModal from '~/features/Rooms/EditRoomModal';

export const loader = roomLoaderMock;

export const action = roomActionMock;

const RoomProfilePage = () => {
	const loaderData = useLoaderData<RoomProfileResponse>();

	const [isEditRoomModalOpen, setIsEditRoomModalOpen] = useState(false);
	const toggleEditRoomModal = () => {
		setIsEditRoomModalOpen(!isEditRoomModalOpen);
	};

	const [isDeleteRoomModalOpen, setIsDeleteRoomModalOpen] = useState(false);
	const toggleDeleteRoomModal = () => {
		setIsDeleteRoomModalOpen(!isDeleteRoomModalOpen);
	};

	if (
		!loaderData ||
		!loaderData.id ||
		!loaderData.name ||
		!loaderData.createdAt ||
		!loaderData.participants
	) {
		return <LoadingIcon />;
	}
	const { participants, id, name, createdAt } = loaderData;

	return (
		<>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<Box>
					<RoomProfile
						id={id}
						name={name}
						createdAt={createdAt}
						onClick={toggleEditRoomModal}
					/>
					<EditRoomModal
						isOpen={isEditRoomModalOpen}
						onClose={toggleEditRoomModal}
						name={name}
						roomId={id}
					/>
				</Box>
				<Box>
					<ParticipantCardList participants={participants} />
				</Box>
				<Container>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button color={'caution'} onClick={toggleDeleteRoomModal}>
						Delete This Room
					</Button>
				</Container>
				<DeleteRoomModal
					isOpen={isDeleteRoomModalOpen}
					onClose={toggleDeleteRoomModal}
					name={name}
					roomId={id}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
