import { ActionFunction, TypedResponse, json } from '@remix-run/node';
import { Message, writeErrorLog } from '@util';

type InvalidMethodActionResponse = Message;

export const invalidMethodAction: ActionFunction = async (): Promise<
	TypedResponse<InvalidMethodActionResponse>
> => {
	const response = { message: 'invalid method' };
	writeErrorLog(response);
	return json(response, 400);
};
