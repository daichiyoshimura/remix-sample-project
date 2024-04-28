import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
	Container,
	LinkButton,
	LocationBar,
	EndContainer,
	VerticalList,
	ContentsTopContainer,
	ContentsBottomContainer,
} from '@components';

const ParticipantsPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<ContentsTopContainer>
				<Container>
					<LocationBar pathname={pathname} title={'Participants'} />
				</Container>
				<EndContainer>
					<LinkButton to={'/participant/new'}>New Participant</LinkButton>
				</EndContainer>
			</ContentsTopContainer>
			<ContentsBottomContainer>
				<Container>
					<VerticalList<string>
						items={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
						render={(item) => <p>{item}</p>}
					/>
				</Container>
			</ContentsBottomContainer>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default ParticipantsPage;
