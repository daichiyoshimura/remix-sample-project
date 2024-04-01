import {
	ActionFunction,
	ActionFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';
import { invalidMethodAction } from './invalidMethodAction.server';
import { Message } from '~/hooks/useHttpClient';

export const roomsActionMock: ActionFunction = async (
	args: ActionFunctionArgs,
) => {
	switch (args.request.method) {
		case 'POST':
			return await postRoomsActionMock(args);
		default:
			return await invalidMethodAction(args);
	}
};

const postRoomsActionMock: ActionFunction = async ({
	request,
}: ActionFunctionArgs): Promise<TypedResponse<Message>> => {
	const body = await request.text();
	console.log(`/rooms ${request.method} ${body}`);
	return json({ message: 'success on mock' }, 200);
};
