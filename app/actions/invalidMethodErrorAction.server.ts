import { TypedResponse, json } from '@remix-run/node';
import { Message, writeErrorLog } from '@util';

export type InvalidMethodErrorActionResponse = Message;

export const invalidMethodErrorAction = async (): Promise<
	TypedResponse<InvalidMethodErrorActionResponse>
> => {
	const response = { message: 'invalid method' };
	writeErrorLog(response);
	return json(response, 400);
};
