/*
 * This hook is for making requests from the client-side to server-side action functions.
 * If you need to perform HTTP communication with a backend other than Remix server-side,
 * please go through the action function.
 * Also, for requests equivalent to GET, please use the loader function.
 */

import { MutationStatus, useMutationState } from './useMutationState';

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
	MutationStatus,
	() => void,
	() => Promise<T | Message>,
] => {
	const [mutationStatus, setMutationStatus] = useMutationState('init');

	const sendRequest = async (): Promise<T | Message> => {
		try {
			setMutationStatus('loading');
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
			setMutationStatus('success');
			return responseBody;
		} catch (error: unknown) {
			const message =
				error instanceof Error ? error.message : 'unknown error';
			setMutationStatus('failure');
			return { message: message };
		}
	};

	const resetMutationStatus = () => {
		setMutationStatus('init');
	};

	return [mutationStatus, resetMutationStatus, sendRequest];
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
