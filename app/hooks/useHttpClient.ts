/*
 * This hook is for making requests from the client-side to server-side action functions.
 * If you need to perform HTTP communication with a backend other than Remix server-side,
 * please go through the action function.
 * Also, for requests equivalent to GET, please use the loader function.
 */

import { MutationState, useMutationState } from './useMutationState';

export type Message = { message: string };

export type SendRequestArgs<T> = {
	url: string;
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'; //DO NOT APPEND GET
	body?: T | undefined;
	queryParams?: Record<string, string | number> | undefined;
	headers?: Record<string, string> | undefined;
	timeout?: number | undefined;
};
type HttpResponse<T> = [IsError: boolean, ResponseBody: T, Message: Message];
type SendRequest = <ReqBody, ResBody>(
	args: SendRequestArgs<ReqBody>,
) => Promise<HttpResponse<ResBody>>;

export const useHttpClient = (): [MutationState, () => void, SendRequest] => {
	const [mutationState, setMutationState] = useMutationState('init');

	const sendRequest: SendRequest = async <ReqBody, ResBody>({
		url,
		method,
		body = undefined,
		queryParams = undefined,
		headers = undefined,
		timeout = undefined,
	}: SendRequestArgs<ReqBody>): Promise<HttpResponse<ResBody>> => {
		if (queryParams) {
			const queryString = buildQueryString(queryParams);
			url += `?${queryString}`;
		}
		const controller = new AbortController();
		const signal = controller.signal;

		if (timeout) {
			setTimeout(() => controller.abort(), timeout);
		}

		try {
			setMutationState('loading');
			const response = await fetch(url, {
				method: method,
				headers: headers,
				body: body ? JSON.stringify(body) : undefined,
				signal,
			});
			if (!response.ok) {
				throw new Error('failed to request');
			}
			const responseBody: ResBody = await response.json();

			setMutationState('success');
			return [false, responseBody, {} as Message];
		} catch (error: unknown) {
			const message =
				error instanceof Error ? error.message : 'unknown error';
			setMutationState('failure');
			return [true, {} as ResBody, { message }];
		}
	};

	const resetMutationState = () => {
		setMutationState('init');
	};

	return [mutationState, resetMutationState, sendRequest];
};

const buildQueryString = (
	queryParams: Record<string, string | number>,
): string => {
	const queryString = new URLSearchParams();
	for (const [key, value] of Object.entries(queryParams)) {
		queryString.append(key, String(value));
	}
	return queryString.toString();
};
