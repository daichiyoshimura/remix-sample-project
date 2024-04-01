/*
 * This hook is for making requests from the client-side to server-side action functions.
 * If you need to perform HTTP communication with a backend other than Remix server-side,
 * please go through the action function.
 * Also, for requests equivalent to GET, please use the loader function.
 */

import { requestStatus, useRequestState } from './useRequestState';

export type Message = { message: string };

export interface useHttpClientArgs {
	path: string;
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'; //DO NOT APPEND GET
	body?: string;
	params?: string;
}

export const useHttpClient = <T>({
	path,
	method,
	body = undefined,
	params = '',
}: useHttpClientArgs): [
	requestStatus,
	() => void,
	() => Promise<T | Message>,
] => {
	const [requestStatus, setRequestStatus] = useRequestState();

	const sendRequest = async (): Promise<T | Message> => {
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
				throw new Error('failed to request');
			}
			const responseBody: T = await response.json();
			setRequestStatus('success');
			return responseBody;
		} catch (error: unknown) {
			const message =
				error instanceof Error ? error.message : 'unknown error';
			setRequestStatus('failure');
			return { message: message };
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
