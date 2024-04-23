import { Navigation, Outlet, useLoaderData, useOutletContext } from '@remix-run/react';
import { Box, Container, LinkButton } from '@components';
import { RoomCardList } from '@features';
import { roomListPageAction } from '@server/actions';
import { roomListPageLoader } from '@server/loaders';

export const loader = roomListPageLoader;

export const action = roomListPageAction;

const RoomListPage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if ('message' in loaderData) {
		throw Error(loaderData.message);
	}
	const { rooms } = loaderData;

	return (
		<>
			<Box>
				<RoomCardList rooms={rooms} />
			</Box>
			<Container>
				<LinkButton to={'./new'}>Create Room</LinkButton>
			</Container>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomListPage;
