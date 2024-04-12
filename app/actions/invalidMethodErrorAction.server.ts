import { TypedResponse, json } from '@remix-run/node';
import { MessageWithSuccess, writeErrorLog } from '@util';

export type InvalidMethodErrorActionResponse = MessageWithSuccess;

export const invalidMethodErrorAction = async (): Promise<
	TypedResponse<InvalidMethodErrorActionResponse>
> => {
	writeErrorLog({ message: 'method not allowed' });
	return json({ success: false, message: 'method not allowed' }, 405);
};
