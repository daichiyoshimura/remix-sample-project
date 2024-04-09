import { useEffect, useState } from 'react';
import { useActionData, useLoaderData, useLocation, useNavigate } from '@remix-run/react';
import { useBinaryState } from '@hooks';
import { isBoolean, isDefined } from '@util';
import { roomAction } from '@actions';
import { roomLoader } from '@loaders';
import { Box, Button, LinkButton, Container, ContentArea, Footer, Header } from '@components';
import {
	ParticipantCardList,
	EditRoomModal,
	RoomProfile,
	CreateRoomModal,
	DeleteRoomModal,
} from '@features';

export const loader = roomLoader;

export const action = roomAction;

const RoomProfilePage = () => {
	const { roomProfile } = useLoaderData<typeof loader>();
	const actionData = useActionData<typeof action>();

	const [isCreateRoomModalOpen, setCreateRoomModalOpen] = useState<boolean>(false);
	const [isEditRoomModalOpen, toggleEditRoomModalOpen] = useBinaryState(false);
	const [isDeleteRoomModalOpen, toggleDeleteRoomModalOpen] = useBinaryState(false);
	const { state } = useLocation();
	const navigate = useNavigate();

	// delete room modal effect
	useEffect(() => {
		if (!isDefined(actionData)) return;
		navigate('../', { state: { isDeleted: true } });
		// eslint-disable-next-line
	}, [actionData]);

	// create room modal effect
	useEffect(() => {
		if (!isDefined(state) || !isBoolean(state.isCreated)) return;
		const isCreated = state.isCreated as boolean;
		setCreateRoomModalOpen(isCreated);
	}, [state]);

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
				<CreateRoomModal
					isOpen={isCreateRoomModalOpen}
					onClose={() => setCreateRoomModalOpen(false)}
					state={'success'}
				/>
				<EditRoomModal
					isOpen={isEditRoomModalOpen}
					onClose={toggleEditRoomModalOpen}
					roomId={id}
				/>
			</ContentArea>
			<Footer />
		</>
	);
};

export default RoomProfilePage;
