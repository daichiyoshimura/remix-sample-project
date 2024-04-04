import { ActionFunction, ActionFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Message, logger } from '@util';

export const invalidMethodAction: ActionFunction = async (
	{ request }: ActionFunctionArgs,
): Promise<TypedResponse<Message>> => {
	logger({
		path: '/invalid',
		method: request.method,
		request: await request.text(),
		response: JSON.stringify({ message: 'invalid method' }),
	});
	return json({ message: 'invalid method' }, 400);
};
