import { MappedTypes } from '@util';

type Level = 'info' | 'error';
type LogFormat<T> = {
	level: Level;
	message: T;
};

const writeLog = <T>(level: Level, message: T) => {
	const structuredMessage: LogFormat<T> = {
		level: level,
		message: message,
	};
	console.log(JSON.stringify(structuredMessage));
};

type ErrorMessage = MappedTypes<{
	message: string;
}>;

export const writeErrorLog = (message: ErrorMessage) => {
	writeLog<ErrorMessage>('error', message);
};

type RequestMessage = MappedTypes<{
	path: string;
	method: string;
	request: object | undefined;
	response: object | undefined;
}>;

export const writeRequestLog = (message: RequestMessage) => {
	writeLog<RequestMessage>('info', message);
};
