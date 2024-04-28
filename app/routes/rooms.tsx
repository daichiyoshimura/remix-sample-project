import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	FlexCenter,
	LinkButton,
	LocationBar,
	FlexEnd,
	VerticalList,
	ContentsTopLayout,
	ContentsBottomLayout,
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
			<ContentsTopLayout>
				<FlexCenter>
					<LocationBar pathname={pathname} title={'Rooms'} />
				</FlexCenter>
				<FlexEnd>
					<LinkButton to={'/rooms/new'}>Create Room</LinkButton>
				</FlexEnd>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<FlexCenter>
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
				</FlexCenter>
			</ContentsBottomLayout>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomListPage;
