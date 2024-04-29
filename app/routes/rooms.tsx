import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import { LinkButton, LocationBar, FlexEnd } from '@components';
import { RoomCard, RoomCardList } from '@features';
import { SplitPaneLayout } from '@components/Layouts/SplitPaneLayout';
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
			<SplitPaneLayout
				top={
					<>
						<LocationBar pathname={pathname} title={'Rooms'} />
						<FlexEnd>
							<LinkButton to={'/rooms/new'}>New Room</LinkButton>
						</FlexEnd>
					</>
				}
				bottom={
					<>
						<RoomCardList
							items={rooms}
							render={({ id, name, createdAt }) => (
								<RoomCard
									key={id}
									id={id}
									name={name}
									createdAt={createdAt}
									LinkButton={<LinkButton to={`/rooms/${id}`}>Enter</LinkButton>}
								/>
							)}
						/>
					</>
				}
			/>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomListPage;
