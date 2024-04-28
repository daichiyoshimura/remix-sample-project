import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
	Container,
	LinkButton,
	LocationBar,
	EndContainer,
	ContentsTopContainer,
	ContentsBottomContainer,
	DangerZoneContainer,
	BetweenContainer,
	DescriptionText,
	CautionTextLinkButton,
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
				<Container>
					<DangerZoneContainer>
						<BetweenContainer>
							<DescriptionText
								description={`Please be careful not to make any mistakes when operating the features within this area.`}
							/>
							<CautionTextLinkButton to={'/account'}>
								Delete Account (before implement)
							</CautionTextLinkButton>
						</BetweenContainer>
					</DangerZoneContainer>
				</Container>
			</ContentsBottomContainer>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default AccountPage;
