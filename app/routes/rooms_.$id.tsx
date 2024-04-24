import { Navigation, Outlet, useLoaderData, useOutletContext } from '@remix-run/react';
import { Box, LinkButton, Container } from '@components';
import { ParticipantCardList, RoomProfile } from '@features';
import { roomProfilePageAction } from '@server/actions';
import { roomProfilePageLoader } from '@server/loaders';

export const loader = roomProfilePageLoader;

export const action = roomProfilePageAction;

const RoomProfilePage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if ('message' in loaderData) {
		throw Error(loaderData.message);
	}
	const { id, name, createdAt, participants } = loaderData;

	return (
		<>
			<Box>
				<RoomProfile id={id} name={name} createdAt={createdAt} />
			</Box>
			<Box>
				<ParticipantCardList participants={participants} />
			</Box>
			<Container>
				<LinkButton to="/rooms">Back</LinkButton>
				<LinkButton to="./delete">Delete This Room</LinkButton>
			</Container>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomProfilePage;
