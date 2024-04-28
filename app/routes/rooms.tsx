import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	Container,
	LinkButton,
	LocationBar,
	EndContainer,
	VerticalList,
	ContentsTopContainer,
	ContentsBottomContainer,
} from '@components';
import { RoomCard, RoomCardProps } from '@features';
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

	const { pathname } = useLocation();

	return (
		<>
			<ContentsTopContainer>
				<Container>
					<LocationBar pathname={pathname} title={'Rooms'} />
				</Container>
				<EndContainer>
					<LinkButton to={'/rooms/new'}>Create Room</LinkButton>
				</EndContainer>
			</ContentsTopContainer>
			<ContentsBottomContainer>
				<Container>
					<VerticalList<RoomCardProps>
						items={rooms}
						render={(room) => (
							<RoomCard
								key={room.id}
								id={room.id}
								name={room.name}
								createdAt={room.createdAt}
								LinkButton={<LinkButton to={`/rooms/${room.id}`}>Enter</LinkButton>}
							/>
						)}
					/>
				</Container>
			</ContentsBottomContainer>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomListPage;
