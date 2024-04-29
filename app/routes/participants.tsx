import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	LocationBar,
	FlexEnd,
	SideBarLayout,
	FlexBetween,
	SplitPaneLayout,
	TextLinkButton,
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
			<SplitPaneLayout
				top={
					<>
						<LocationBar pathname={pathname} title={'Participants'} />
						<FlexEnd>
							<TextLinkButton to={'/participants/new'} caption={'New Participant'} />
						</FlexEnd>
					</>
				}
				bottom={
					<>
						<FlexBetween>
							<SideBarLayout
								left={
									<>
										<ParticipantNameList
											items={participants}
											render={({ id, name }) => (
												<ParticipantName
													id={id}
													name={name}
													to={`/participants/${id}`}
												/>
											)}
										/>
									</>
								}
								right={
									<>
										<Outlet context={useOutletContext<Navigation>()} />
									</>
								}
							/>
						</FlexBetween>
					</>
				}
			/>
		</>
	);
};

export default ParticipantListPage;
