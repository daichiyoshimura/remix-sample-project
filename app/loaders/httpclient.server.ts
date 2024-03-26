export async function callBackendAPI<T>(
	method: string,
	url: string,
	requestBody?: any,
	queryParams?: Record<string, string | number> | undefined,
): Promise<T> {
	if (queryParams) {
		const queryString = buildQueryString(queryParams);
		url += `?${queryString}`;
	}

	const requestOptions: RequestInit = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestBody),
	};

	try {
		const response = await fetch(url, requestOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return (await response.json()) as T;
	} catch (error) {
		console.error('API呼び出しエラー:', error);
		throw error;
	}
}

function buildQueryString(
	queryParams: Record<string, string | number>,
): string {
	const queryString = new URLSearchParams();
	for (const [key, value] of Object.entries(queryParams)) {
		queryString.append(key, String(value));
	}
	return queryString.toString();
}
