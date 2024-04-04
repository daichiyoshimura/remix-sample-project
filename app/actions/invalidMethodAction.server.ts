import { ActionFunction, TypedResponse, json } from '@remix-run/node';
import { Message, writeErrorLog } from '@util';

type InvalidMethodActionResponse = Message;

export const invalidMethodAction: ActionFunction = async (): Promise<
	TypedResponse<InvalidMethodActionResponse>
> => {
	writeErrorLog({
		message: 'invalid method',
	});
	return json({ message: 'invalid method' }, 400);
};
