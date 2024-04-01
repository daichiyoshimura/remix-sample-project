import {
	ActionFunction,
	ActionFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';

type SimpleMessage = { message: string };

export const invalidMethodAction: ActionFunction = async ({
	request,
}: ActionFunctionArgs): Promise<TypedResponse<SimpleMessage>> => {
	console.log('/invalid ' + request.method);
	return json({ message: 'invalid method' }, 400);
};
