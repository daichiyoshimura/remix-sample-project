import { TypedResponse, json } from '@remix-run/node';
import { MappedTypes, Message, writeErrorLog } from '@util';

export type InvalidMethodActionResponse = MappedTypes<Message>;

export const invalidMethodAction = async (): Promise<
	TypedResponse<InvalidMethodActionResponse>
> => {
	const response = { message: 'invalid method' };
	writeErrorLog(response);
	return json(response, 400);
};
