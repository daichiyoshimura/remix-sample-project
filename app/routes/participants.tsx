import { Navigation, Outlet, useLoaderData, useLocation, useOutletContext } from '@remix-run/react';
import { DescriptionText, TitleText, AddLinkButton } from '@components';
import { ParticipantName, ParticipantNameList } from '@features';
import { NavigationBarLayout, SideBarLayout, SplitPaneLayout } from '@layouts';
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
					<Outlet context={useOutletContext<Navigation>()} />
				</SideBarLayout>
			}
		/>
	);
};

export default ParticipantListPage;
