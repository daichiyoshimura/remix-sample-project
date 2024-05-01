import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
	DangerZone,
	DescriptionText,
	CautionTextLinkButton,
	TitleText,
	EditLinkButton,
} from '@components';
import { AccountProfile } from '@features';
import { NavigationBarLayout, SplitPaneLayout } from '@layouts';

const AccountPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<SplitPaneLayout
				top={
					<NavigationBarLayout
						location={<DescriptionText description={pathname} />}
						title={<TitleText title={'Account'} />}
						right={<EditLinkButton to={`/accounts/${'1'}/edit`} />}
					/>
				}
				bottom={
					<>
						<AccountProfile
							id={'account-id'}
							name={'account-name'}
							email={'account@email.com'}
						/>
						<DangerZone>
							<DescriptionText
								description={`Please be careful not to make any mistakes when operating the features within this area.`}
							/>
							<CautionTextLinkButton
								to={`/accounts/${'1'}/delete`}
								caption={'Delete This Account'}
							/>
						</DangerZone>
					</>
				}
			/>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default AccountPage;
