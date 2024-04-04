import { ActionFunction, ActionFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Message, writeErrorLog } from '@util';

type InvalidMethodActionResponse = Message;

export const invalidMethodAction: ActionFunction = async (
	{ request }: ActionFunctionArgs,
): Promise<TypedResponse<InvalidMethodActionResponse>> => {
	writeErrorLog({
		message: 'invalid method',
	});
	return json({ message: 'invalid method' }, 400);
};
