import { MappedTypes } from '@util';

type RequestMessage = MappedTypes<{
	path: string;
	method: string;
	request: object | undefined;
	response: object | undefined;
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
