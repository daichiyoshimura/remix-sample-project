import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { DescriptionText, TitleText } from '@components';
import { ServerErrorResponseBody } from '@server/util';

export const PageErrorBoundary = () => {
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
		<div className="h-full flex flex-col justify-center space-y-8">
			<div className="flex justify-center">
				<TitleText title={'Loading Data Error'} />
			</div>
			<div className="flex justify-center">
				<DescriptionText description={description(error)} />
			</div>
		</div>
	);
};
