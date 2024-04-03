/*
 * This hook is for making requests from the client-side to server-side action functions.
 * If you need to perform HTTP communication with a backend other than Remix server-side,
 * please go through the action function.
 * Also, for requests equivalent to GET, please use the loader function.
 *
 * !Notice! The mutation request from the client-side to the server-side is passed to the action function.
 * The client-side will not receive the response body even if it is set as the return value.
 * Use useActionData to retrieve the return value of the action function.
 */

import { MutationState, useMutationState } from './useMutationState';

export type SendRequestArgs<T> = {
	path: string;
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'; //DO NOT APPEND GET
	body?: T | undefined;
	queryParams?: Record<string, string | number> | undefined;
	headers?: Record<string, string> | undefined;
	timeout?: number | undefined;
};
export type SendRequest = <T>(args: SendRequestArgs<T>) => void;

export const useHttpClient = (): [MutationState, () => void, SendRequest] => {
	const [mutationState, setMutationState] = useMutationState('init');

	const sendRequest: SendRequest = async <T>({
		path,
		method,
		body = undefined,
		queryParams = undefined,
		headers = undefined,
		timeout = undefined,
	}: SendRequestArgs<T>): Promise<void> => {
		if (queryParams) {
			const queryString = buildQueryString(queryParams);
			path += `?${queryString}`;
		}
		const controller = new AbortController();
		const signal = controller.signal;

		if (timeout) {
			setTimeout(() => controller.abort(), timeout);
		}

		try {
			setMutationState('loading');
			const response = await fetch(path, {
				method: method,
				headers: headers,
				body: body ? JSON.stringify(body) : undefined,
				signal,
			});
			if (!response.ok) {
				throw new Error('failed to request');
			}
			setMutationState('success');
		} catch (error: unknown) {
			const message = error instanceof Error ? error.message : 'unknown error';
			console.log(message);
			setMutationState('failure');
		}
	};

	const resetMutationState = () => {
		setMutationState('init');
	};

	return [mutationState, resetMutationState, sendRequest];
};

const buildQueryString = (queryParams: Record<string, string | number>): string => {
	const queryString = new URLSearchParams();
	for (const [key, value] of Object.entries(queryParams)) {
		queryString.append(key, String(value));
	}
	return queryString.toString();
};
