import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
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
				<LocationBar pathname={pathname} title={'Participants'} />
				<FlexEnd>
					<LinkButton to={'/participant/new'}>New Participant</LinkButton>
				</FlexEnd>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<VerticalList<string>
					items={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
					render={(item) => <p>{item}</p>}
				/>
			</ContentsBottomLayout>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default ParticipantsPage;
