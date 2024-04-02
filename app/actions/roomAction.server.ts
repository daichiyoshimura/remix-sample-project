import {
	ActionFunction,
	ActionFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';
import { invalidMethodAction } from './invalidMethodAction.server';
import { Message } from '~/hooks/useHttpClient';
import { patchRoom } from '~/apis/room.server';

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
		`/room/ ${roomId} ${request.method} ${JSON.stringify({
			roomId: roomId,
		})}`,
	);
	return json({ message: 'success on mock' }, 200);
};

const patchRoomActionMock: ActionFunction = async ({
	request,
	params,
}: ActionFunctionArgs): Promise<TypedResponse<Message>> => {
	const roomId = params.id as string;
	const body = (await request.json()) as {
		id: string;
		name: string;
	};
	patchRoom({
		accountId: 'accountId',
		room: {
			id: roomId,
			name: body.name,
		},
	});
	console.log(
		`/room/${roomId} ${request.method} ${JSON.stringify({
			roomId: roomId,
		})}`,
	);
	return json({ message: 'success on mock' }, 200);
};
