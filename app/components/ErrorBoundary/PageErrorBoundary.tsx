import { isRouteErrorResponse, useLocation, useRouteError } from '@remix-run/react';
import { AddLinkButton, DescriptionText, NoContentsZone, TitleText } from '@components';
import { NavigationBarLayout, SplitPaneLayout } from '@layouts';
import { ServerErrorResponseBody } from '@server/util';

export const PageErrorBoundary = () => {
	const { pathname } = useLocation();
	const error = useRouteError();
	const description = (error: unknown): string => {
		const [message, code] = ((): [string, string] => {
			if (isRouteErrorResponse(error)) {
				const { code, message } = error.data as ServerErrorResponseBody;
				return [message, code];
			} else if (error instanceof Error) {
				return [error.message, 'Client-General'];
			}
			return ['Unexpected Error', 'Client-Fatal'];
		})();
		return `${message} (Code: ${code})`;
	};
	return (
		<SplitPaneLayout
			top={
				<NavigationBarLayout
					location={<DescriptionText description={pathname} />}
					title={<TitleText title={'Rooms'} />}
					right={<AddLinkButton to={'/rooms/new'} />}
				/>
			}
			bottom={
				<NoContentsZone title={'Loading Data Error'} description={description(error)} />
			}
		/>
	);
};
