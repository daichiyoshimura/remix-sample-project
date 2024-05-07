import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import {
	DescriptionText,
	TitleText,
	AddLinkButton,
	PageErrorBoundary,
	NoContentsZone,
} from '@components';
import { ParticipantName, ParticipantNameList } from '@features';
import { NavigationBarLayout, SideBarLayout, SplitPaneLayout } from '@layouts';
import { participantListPageLoader } from '@server/loaders';

export const loader = participantListPageLoader;

export const ErrorBoundary = PageErrorBoundary;

const ParticipantListPage = () => {
	const { participants } = useLoaderData<typeof loader>();

	const { pathname } = useLocation();

	return (
		<SplitPaneLayout
			top={
				<NavigationBarLayout
					location={<DescriptionText description={pathname} />}
					title={<TitleText title={'Participants'} />}
					right={<AddLinkButton to={'/participants/new'} />}
				/>
			}
			bottom={
				<SideBarLayout
					sideBar={
						<ParticipantNameList
							items={participants}
							render={({ id, name }) => (
								<ParticipantName id={id} name={name} to={`/participants/${id}`} />
							)}
						/>
					}
				>
					<NoContentsZone title={'Select a participant'} />
					<Outlet context={useOutletContext<Navigation>()} />
				</SideBarLayout>
			}
		/>
	);
};

export default ParticipantListPage;
