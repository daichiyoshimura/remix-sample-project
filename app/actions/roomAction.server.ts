import {
	ActionFunction,
	ActionFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';
import { invalidMethodAction } from './invalidMethodAction.server';

type simpleMessage = { message: string };

export const roomActionMock: ActionFunction = async (
	args: ActionFunctionArgs,
) => {
	switch (args.request.method) {
		case 'DELETE':
			return await deleteRoomActionMock(args);
		case 'PATCH':
			return await patchRoomActionMock(args);
		default:
			return await invalidMethodAction(args);
	}
};

const deleteRoomActionMock: ActionFunction = async ({
	request,
	params,
}: ActionFunctionArgs): Promise<TypedResponse<simpleMessage>> => {
	const roomId = params.id as string;
	console.log(
		'/room/' +
			roomId +
			' ' +
			request.method +
			' ' +
			JSON.stringify({ roomId: roomId }),
	);
	return json({ message: 'success on mock' }, 200);
};

const patchRoomActionMock: ActionFunction = async ({
	request,
	params,
}: ActionFunctionArgs): Promise<TypedResponse<simpleMessage>> => {
	const roomId = params.id as string;
	console.log(
		'/room/' +
			roomId +
			' ' +
			request.method +
			' ' +
			JSON.stringify({ roomId: roomId }),
	);
	return json({ message: 'success on mock' }, 200);
};
