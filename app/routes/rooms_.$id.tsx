import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import { LinkButton, Container, LocationBar } from '@components';
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

	const { pathname } = useLocation();

	return (
		<>
			<Container>
				<LocationBar pathname={pathname} title={'Room Profile'} />
			</Container>
			<Container>
				<RoomProfile id={id} name={name} createdAt={createdAt} />
			</Container>
			<Container>
				<ParticipantCardList participants={participants} />
			</Container>
			<Container>
				<LinkButton to="/rooms">Back</LinkButton>
				<LinkButton to="./delete" color="caution">
					Delete This Room
				</LinkButton>
			</Container>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomProfilePage;
