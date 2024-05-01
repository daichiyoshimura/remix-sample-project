import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	FlexCenter,
	CautionTextLinkButton,
	Grid,
	SplitPaneLayout,
	NavigationBarLayout,
	DescriptionText,
	TitleText,
	EditLinkButton,
	BackLinkButton,
} from '@components';
import { ParticipantGridItem, ParticipantGridItemProps, RoomProfile } from '@features';
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
			<SplitPaneLayout
				top={
					<NavigationBarLayout
						location={<DescriptionText description={pathname} />}
						title={<TitleText title={'Room Profile'} />}
						right={<EditLinkButton to={`/rooms/${id}/edit`} />}
						left={<BackLinkButton to={'/rooms'} />}
					/>
				}
				bottom={
					<>
						<RoomProfile id={id} name={name} createdAt={createdAt} />
						<Grid<ParticipantGridItemProps>
							items={participants}
							render={({ id, name }) => <ParticipantGridItem id={id} name={name} />}
						/>
						<FlexCenter>
							<CautionTextLinkButton
								to={`/rooms/${id}/delete`}
								caption={'Delete This Room'}
							/>
						</FlexCenter>
					</>
				}
			/>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomProfilePage;
