import { MappedTypes } from '@util';

type RequestMessage = MappedTypes<{
	path: string;
	method: string;
	request: string;
	response: string;
}>;

export const writeRequestLog = (message: RequestMessage) => {
	console.log(
		JSON.stringify({
			level: 'info',
			message: message,
		}),
	);
};

type ErrorResponseMessage = MappedTypes<{
	message: string;
}>;

export const writeErrorLog = (message: ErrorResponseMessage) => {
	console.log(
		JSON.stringify({
			level: 'error',
			message: message,
		}),
	);
};
