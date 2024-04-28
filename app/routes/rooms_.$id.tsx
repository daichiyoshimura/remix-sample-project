import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	LinkButton,
	FlexCenter,
	LocationBar,
	EditIcon,
	CautionTextLinkButton,
	ContentsTopLayout,
	ContentsBottomLayout,
	FlexStart,
} from '@components';
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
			<ContentsTopLayout>
				<FlexCenter>
					<LocationBar pathname={pathname} title={'Room Profile'} />
				</FlexCenter>
				<FlexStart>
					<LinkButton to={'/rooms'}>Back</LinkButton>
				</FlexStart>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<FlexCenter>
					<RoomProfile
						id={id}
						name={name}
						createdAt={createdAt}
						LinkButton={
							<LinkButton to={`/rooms/${id}/edit`}>
								<EditIcon />
							</LinkButton>
						}
					/>
				</FlexCenter>
				<FlexCenter>
					<ParticipantCardList participants={participants} />
				</FlexCenter>
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
