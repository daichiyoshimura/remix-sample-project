import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import { TextLinkButton, DescriptionText, TitleText, AddLinkButton } from '@components';
import { RoomCard, RoomCardList } from '@features';
import { NavigationBarLayout, SplitPaneLayout } from '@layouts';
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
					<NavigationBarLayout
						location={<DescriptionText description={pathname} />}
						title={<TitleText title={'Rooms'} />}
						right={<AddLinkButton to={'/rooms/new'} />}
					/>
				}
				bottom={
					<RoomCardList
						items={rooms}
						render={({ id, name, createdAt }) => (
							<RoomCard
								key={id}
								id={id}
								name={name}
								createdAt={createdAt}
								linkButton={
									<TextLinkButton to={`/rooms/${id}`} caption={'Enter'} />
								}
							/>
						)}
					/>
				}
			/>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomListPage;
