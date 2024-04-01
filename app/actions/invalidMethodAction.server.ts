import {
	ActionFunction,
	ActionFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';

type simpleMessage = { message: string };

export const invalidMethodAction: ActionFunction = async ({
	request,
}: ActionFunctionArgs): Promise<TypedResponse<simpleMessage>> => {
	console.log('/invalid ' + request.method);
	return json({ message: 'invalid method' }, 400);
};
