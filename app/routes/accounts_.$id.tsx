import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
	LinkButton,
	LocationBar,
	FlexEnd,
	ContentsTopLayout,
	ContentsBottomLayout,
	DangerZone,
	FlexBetween,
	DescriptionText,
	CautionTextLinkButton,
} from '@components';
import { AccountProfile } from '@features';

const AccountPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<ContentsTopLayout>
				<LocationBar pathname={pathname} title={'Account'} />
				<FlexEnd>
					<LinkButton to={`/accounts/${'1'}/edit`}>Edit Account</LinkButton>
				</FlexEnd>
			</ContentsTopLayout>
			<ContentsBottomLayout>
				<AccountProfile
					id={'account-id'}
					name={'account-name'}
					email={'account@email.com'}
				/>
				<DangerZone>
					<FlexBetween>
						<DescriptionText
							description={`Please be careful not to make any mistakes when operating the features within this area.`}
						/>
						<CautionTextLinkButton to={`/accounts/${'1'}/delete`}>
							Delete Account
						</CautionTextLinkButton>
					</FlexBetween>
				</DangerZone>
			</ContentsBottomLayout>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default AccountPage;
