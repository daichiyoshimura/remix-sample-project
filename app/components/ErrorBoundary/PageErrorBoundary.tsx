import { useLocation, useRouteError } from '@remix-run/react';
import { useErrorDescription } from '@hooks';
import { DescriptionText, NoContentsZone, TitleText } from '@components';
import { NavigationBarLayout, SplitPaneLayout } from '@layouts';

export const PageErrorBoundary = () => {
	const { pathname } = useLocation();
	const error = useRouteError();
	const description = useErrorDescription();
	return (
		<SplitPaneLayout
			top={
				<NavigationBarLayout
					location={<DescriptionText description={pathname} />}
					title={<TitleText title={'Error'} />}
				/>
			}
			bottom={
				<NoContentsZone title={'Loading Data Error'} description={description(error)} />
			}
		/>
	);
};
