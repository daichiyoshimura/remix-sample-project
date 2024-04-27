import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import { Container, LinkButton, LocationBar, EndContainer } from '@components';
import { ParticipantCard } from '@features';

const ParticipantsPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<Container>
				<LocationBar pathname={pathname} title={'Participants'} />
			</Container>
			<EndContainer>
				<LinkButton to={'/participant/new'}>New Participant</LinkButton>
			</EndContainer>
			<Container>
				<ParticipantCard id={'id'} name={'name'} />
			</Container>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default ParticipantsPage;
