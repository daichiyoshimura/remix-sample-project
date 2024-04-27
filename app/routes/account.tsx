import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import { Container, LinkButton, LocationBar, EndContainer } from '@components';
import { AccountProfile } from '@features';

const AccountPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<Container>
				<LocationBar pathname={pathname} title={'Account'} />
			</Container>
			<EndContainer>
				<LinkButton to={'/account'}>Edit Account (before implement)</LinkButton>
			</EndContainer>
			<Container>
				<AccountProfile
					id={'account-id'}
					name={'account-name'}
					email={'account@email.com'}
				/>
			</Container>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default AccountPage;
