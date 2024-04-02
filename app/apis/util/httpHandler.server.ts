type HttpHandlerArgs = {
	method: string;
	url: string;
	body?: object | undefined;
	queryParams?: Record<string, string | number> | undefined;
	headers?: Record<string, string> | undefined;
	timeout?: number | undefined;
};

export type MessageResponse = {
	message: string
}

export type MutationTimes = {
	createdAt: string,
	updatedAt: string,
}

export const httpHandler = async <T>({
	method,
	url,
	body = undefined,
	queryParams = undefined,
	headers = undefined,
	timeout = undefined,
}: HttpHandlerArgs): Promise<T> => {
	if (queryParams) {
		const queryString = buildQueryString(queryParams);
		url += `?${queryString}`;
	}

	const controller = new AbortController();
	const signal = controller.signal;

	const requestOptions: RequestInit = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
		body: body ? JSON.stringify(body) : undefined,
		signal,
	};

	if (timeout) {
		setTimeout(() => controller.abort(), timeout);
	}

	try {
		const response = await fetch(url, requestOptions);

		if (!response.ok) {
			const errorMessage = `HTTP error! Status: ${response.status}`;
			throw new Error(errorMessage);
		}

		return (await response.json()) as T;
	} catch (error) {
		if (error instanceof TypeError && error.message === 'Failed to fetch') {
			throw new Error('Network error: Unable to connect to the server');
		}
		console.error('Unknown error', error);
		throw error;
	}
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
