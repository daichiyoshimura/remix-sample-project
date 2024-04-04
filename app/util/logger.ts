import { MappedTypes } from '@util';

type RequestArgs = MappedTypes<{
	path: string;
	method: string;
	request: string;
	response: string;
}>;

export const logger = (args: RequestArgs) => {
	console.log(
		`path:${args.path} method:${args.method} request:${args.request} response:${args.response}`,
	);
};
