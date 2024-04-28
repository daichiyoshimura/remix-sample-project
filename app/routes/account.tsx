import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
	Container,
	LinkButton,
	LocationBar,
	EndContainer,
	ContentsTopContainer,
	ContentsBottomContainer,
} from '@components';
import { AccountProfile } from '@features';

const AccountPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<ContentsTopContainer>
				<Container>
					<LocationBar pathname={pathname} title={'Account'} />
				</Container>
				<EndContainer>
					<LinkButton to={'/account'}>Edit Account (before implement)</LinkButton>
				</EndContainer>
			</ContentsTopContainer>
			<ContentsBottomContainer>
				<Container>
					<AccountProfile
						id={'account-id'}
						name={'account-name'}
						email={'account@email.com'}
					/>
				</Container>
			</ContentsBottomContainer>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default AccountPage;
