/*
 * This hook is for making requests from the client-side to server-side action functions.
 * If you need to perform HTTP communication with a backend other than Remix server-side,
 * please go through the action function.
 * Also, for requests equivalent to GET, please use the loader function.
 */

import {
	requestStatus,
	setRequestStatus,
	useRequestState,
} from './useRequestState';

export interface useHttpClientArgs {
	path: string;
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'; //DO NOT APPEND GET
	body?: string;
	params?: string;
}

export const useHttpClient = ({
	path,
	method,
	body = undefined,
	params = '',
}: useHttpClientArgs): [requestStatus, () => void, () => Promise<void>] => {
	const [requestStatus, setRequestStatus] = useRequestState();

	const sendRequest = async () => {
		try {
			setRequestStatus('loading');
			const response = await fetch(`${path}${params}`, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			});
			if (!response.ok) {
				throw new Error('Request failed');
			}
			setRequestStatus('success');
		} catch (error) {
			setRequestStatus('failure');
			throw error;
		}
	};

	const resetRequestStatus = () => {
		setRequestStatus('init');
	};

	return [requestStatus, resetRequestStatus, sendRequest];
};

export const buildQueryString = (
	queryParams: Record<string, string | number>,
): string => {
	const queryString = new URLSearchParams();
	for (const [key, value] of Object.entries(queryParams)) {
		queryString.append(key, String(value));
	}
	return queryString.toString();
};
