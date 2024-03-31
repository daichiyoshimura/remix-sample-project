export interface useHttpClientArgs {
	path: string;
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'; //DO NOT APPEND GET
	body?: string;
	params?: string;
	setRequestStatus: (
		value: React.SetStateAction<'loading' | 'success' | 'failure' | 'init'>,
	) => void;
}

export const useHttpClient = async ({
	path,
	method,
	body = undefined,
	params = '',
	setRequestStatus,
}: useHttpClientArgs): Promise<Response> => {
	try {
		setRequestStatus('loading');
		const response = await fetch(`${path}${params}`, {
			method: `${method}`,
			headers: {
				'Content-Type': 'application/json',
			},
			body: body,
		});
		if (!response.ok) {
			setRequestStatus('success');
			return response;
		}
		throw new Error('bad status code');
	} catch (error) {
		setRequestStatus('failure');
		throw error;
	}
};

export default useHttpClient;

export const buildQueryString = (
	queryParams: Record<string, string | number>,
): string => {
	const queryString = new URLSearchParams();
	for (const [key, value] of Object.entries(queryParams)) {
		queryString.append(key, String(value));
	}
	return queryString.toString();
};
