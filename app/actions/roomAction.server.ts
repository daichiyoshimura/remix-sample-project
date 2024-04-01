import {
	ActionFunction,
	ActionFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';
import { invalidMethodAction } from './invalidMethodAction.server';
import { Message } from '~/hooks/useHttpClient';

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
}: ActionFunctionArgs): Promise<TypedResponse<Message>> => {
	const roomId = params.id as string;
	console.log(
		`/room/ ${roomId} ${request.method} ${json({ roomId: roomId })}`,
	);
	return json({ message: 'success on mock' }, 200);
};

const patchRoomActionMock: ActionFunction = async ({
	request,
	params,
}: ActionFunctionArgs): Promise<TypedResponse<Message>> => {
	const roomId = params.id as string;
	console.log(
		`/room/ ${roomId} ${request.method} ${json({ roomId: roomId })}`,
	);
	return json({ message: 'success on mock' }, 200);
};
