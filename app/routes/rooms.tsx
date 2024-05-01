import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	TextLinkButton,
	DescriptionText,
	TitleText,
	AddLinkButton,
	ModalErrorBoundary,
} from '@components';
import { RoomCard, RoomCardList } from '@features';
import { NavigationBarLayout, SplitPaneLayout } from '@layouts';
import { roomListPageLoader } from '@server/loaders';

export const loader = roomListPageLoader;

export const ErrorBoundary = ModalErrorBoundary;

const RoomListPage = () => {
	const { rooms } = useLoaderData<typeof loader>();
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
