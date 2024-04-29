import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	LinkButton,
	LocationBar,
	FlexEnd,
	ContentsTopLayout,
	ContentsBottomLayout,
	SideBarLayout,
	ContentsLayout,
	FlexBetween,
} from '@components';
import { ParticipantName, ParticipantNameList } from '@features';
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
					<LinkButton to={'/participants/new'}>New Participant</LinkButton>
				</FlexEnd>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<FlexBetween>
					<SideBarLayout>
						<ParticipantNameList
							items={participants}
							render={({ id, name }) => (
								<ParticipantName id={id} name={name} to={`/participants/${id}`} />
							)}
						/>
					</SideBarLayout>
					<ContentsLayout>
						<Outlet context={useOutletContext<Navigation>()} />
					</ContentsLayout>
				</FlexBetween>
			</ContentsBottomLayout>
		</>
	);
};

export default ParticipantListPage;
