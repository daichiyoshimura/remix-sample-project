import { Navigation, Outlet, useLocation, useOutletContext } from '@remix-run/react';
import {
	LinkButton,
	DangerZone,
	FlexBetween,
	DescriptionText,
	CautionTextLinkButton,
	EditIcon,
	SplitPaneLayout,
	NavigationBarLayout,
	TitleText,
} from '@components';
import { AccountProfile } from '@features';

const AccountPage = () => {
	const { pathname } = useLocation();

	return (
		<>
			<SplitPaneLayout
				top={
					<NavigationBarLayout
						location={<DescriptionText description={pathname} />}
						title={<TitleText title={'Account'} />}
						right={
							<LinkButton to={`/accounts/${'1'}/edit`}>
								<EditIcon />
							</LinkButton>
						}
						left={undefined}
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
							<FlexBetween>
								<DescriptionText
									description={`Please be careful not to make any mistakes when operating the features within this area.`}
								/>
								<CautionTextLinkButton
									to={`/accounts/${'1'}/delete`}
									caption={'Delete This Account'}
								/>
							</FlexBetween>
						</DangerZone>
					</>
				}
			/>
			<Outlet context={useOutletContext<Navigation>()} />
		</>
	);
};

export default AccountPage;
