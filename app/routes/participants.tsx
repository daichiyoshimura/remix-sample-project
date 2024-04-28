import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	LinkButton,
	LocationBar,
	FlexEnd,
	VerticalList,
	ContentsTopLayout,
	ContentsBottomLayout,
	SideBarLayout,
	ContentsLayout,
	FlexBetween,
} from '@components';
import { ParticipantName, ParticipantNameProps } from '@features';
import { participantListPageLoader } from '@server/loaders';

export const loader = participantListPageLoader;

const ParticipantListPage = () => {
	const loaderData = useLoaderData<typeof loader>();
	if ('message' in loaderData) {
		throw Error(loaderData.message);
	}
	const { participants } = loaderData;

	const { pathname } = useLocation();

	return (
		<>
			<ContentsTopLayout>
				<LocationBar pathname={pathname} title={'Participants'} />
				<FlexEnd>
					<LinkButton to={'/participant/new'}>New Participant</LinkButton>
				</FlexEnd>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<FlexBetween>
					<SideBarLayout>
						<VerticalList<ParticipantNameProps>
							items={participants}
							render={(item) => <ParticipantName id={item.id} name={item.name} />}
						/>
					</SideBarLayout>
					<ContentsLayout fadeClass={''}>
						<Outlet context={useOutletContext<Navigation>()} />
					</ContentsLayout>
				</FlexBetween>
			</ContentsBottomLayout>
		</>
	);
};

export default ParticipantListPage;
