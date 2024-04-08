import { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { roomAction } from '@actions';
import { RoomLoaderResponse, roomLoader } from '@loaders';
import {
	Box,
	Button,
	LinkButton,
	Container,
	ContentArea,
	Footer,
	Header,
	MessageModal,
} from '@components';
import { ParticipantCardList, EditRoomModal, RoomProfile } from '@features';
import { DeleteRoomModal } from '@features/Rooms/V2/DeleteRoomModal';
import { isDefined } from '@util/typeGuards';

export const loader = roomLoader;

export const action = roomAction;

const RoomProfilePage = () => {
	const [isCreateRoomModalOpen, setCreateRoomModalOpen] = useState<boolean>(false);
	const [isEditRoomModalOpen, toggleEditRoomModalOpen] = useBinaryState(false);
	const [isDeleteRoomModalOpen, toggleDeleteRoomModalOpen] = useBinaryState(false);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const isCreated = searchParams.get('created');
	useEffect(() => {
		if (isCreated == null) {
			setCreateRoomModalOpen(false);
			return;
		}
		setCreateRoomModalOpen(true);
	}, [isCreated]);

	const { roomProfile } = useLoaderData<RoomLoaderResponse>();
	if (!isDefined(roomProfile)) {
		// TODO Error Page
		return <></>;
	}
	const { id, name, createdAt, participants } = roomProfile;

	return (
		<>
			<Header currentPageTitle="Room Profile" />
			<ContentArea>
				<Box>
					<RoomProfile
						id={id}
						name={name}
						createdAt={createdAt}
						onClick={toggleEditRoomModalOpen}
					/>
					<EditRoomModal
						isOpen={isEditRoomModalOpen}
						onClose={toggleEditRoomModalOpen}
						name={name}
						roomId={id}
					/>
				</Box>
				<Box>
					<ParticipantCardList participants={participants} />
				</Box>
				<Container>
					<LinkButton to="/rooms">Back</LinkButton>
					<Button color={'caution'} onClick={toggleDeleteRoomModalOpen}>
						Delete This Room
					</Button>
				</Container>
				<DeleteRoomModal
					isOpen={isDeleteRoomModalOpen}
					onClose={toggleDeleteRoomModalOpen}
					roomId={id}
				/>
				<MessageModal
					title="Success"
					description="The Room is created"
					isOpen={isCreateRoomModalOpen}
					onClose={() => {
						setCreateRoomModalOpen(false);
					}}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
