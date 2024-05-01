import { writeErrorLog } from '@util';

export type ServerErrorResponseBody = {
	code: string;
	message: string;
};

export class ValidationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'ValidationError';
	}
}

type Code = 'Server-InvalidRequest' | 'Server-Unexpected';

export const handleServerError = (error: unknown): never => {
	const [code, message] = parse(error);
	const body: ServerErrorResponseBody = {
		code: code,
		message: message,
	};
	writeErrorLog(body);
	const headers = new Headers();
	headers.set('Content-Type', 'application/json; charset=utf-8');
	throw new Response(JSON.stringify(body), {
		status: 500,
		headers: headers,
	});
};

const parse = (error: unknown): [Code, string] => {
	if (error instanceof ValidationError) {
		return ['Server-InvalidRequest', error.message];
	} else {
		return ['Server-Unexpected', 'We apologize for any inconvenience caused.'];
	}
};
