import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	LinkButton,
	FlexCenter,
	LocationBar,
	EditIcon,
	CautionTextLinkButton,
	ContentsTopLayout,
	ContentsBottomLayout,
	FlexBetween,
	Grid,
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
			<ContentsTopLayout>
				<LocationBar pathname={pathname} title={'Room Profile'} />
				<FlexBetween>
					<LinkButton to={'/rooms'}>Back</LinkButton>
					<LinkButton to={`/rooms/${id}/edit`}>
						<EditIcon />
					</LinkButton>
				</FlexBetween>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<RoomProfile id={id} name={name} createdAt={createdAt} />
				<Grid<ParticipantGridItemProps>
					items={participants}
					render={(item) => <ParticipantGridItem id={item.id} name={item.name} />}
				/>
				<FlexCenter>
					<CautionTextLinkButton to={`/rooms/${id}/delete`}>
						Delete This Room
					</CautionTextLinkButton>
				</FlexCenter>
			</ContentsBottomLayout>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default RoomProfilePage;
