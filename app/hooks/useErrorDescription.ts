import { isRouteErrorResponse } from '@remix-run/react';

type ServerErrorResponseBody = {
	code: string;
	message: string;
};

export const useErrorDescription = () => {
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
	return description;
};
