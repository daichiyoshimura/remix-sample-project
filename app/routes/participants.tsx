import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
	FlexCenter,
	LinkButton,
	LocationBar,
	FlexEnd,
	VerticalList,
	ContentsTopLayout,
	ContentsBottomLayout,
} from '@components';

const ParticipantsPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<ContentsTopLayout>
				<FlexCenter>
					<LocationBar pathname={pathname} title={'Participants'} />
				</FlexCenter>
				<FlexEnd>
					<LinkButton to={'/participant/new'}>New Participant</LinkButton>
				</FlexEnd>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<FlexCenter>
					<VerticalList<string>
						items={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
						render={(item) => <p>{item}</p>}
					/>
				</FlexCenter>
			</ContentsBottomLayout>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default ParticipantsPage;
