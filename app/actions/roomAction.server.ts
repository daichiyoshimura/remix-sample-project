import { ActionFunction, ActionFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Message } from '@util';
import { invalidMethodAction } from '@actions/invalidMethodAction.server';
import { deleteRoom, patchRoom } from '@apis/room.server';

export const roomAction: ActionFunction = async (args: ActionFunctionArgs) => {
	switch (args.request.method) {
		case 'DELETE':
			return await deleteRoomAction(args);
		case 'PATCH':
			return await patchRoomActionMock(args);
		default:
			return await invalidMethodAction(args);
	}
};

type DeleteRoomActionResponse = Message;

const deleteRoomAction: ActionFunction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<DeleteRoomActionResponse>> => {
	try {
		const accountId: string = typeof params.accountId === 'string' ? params.accountId : '';
		const roomId: string = typeof params.id === 'string' ? params.id : '';
		const message = await deleteRoom({ id: roomId, accountId: accountId });
		console.log(
			`path:/rooms/${roomId} method:${request.method} request: response:${JSON.stringify(
				message,
			)}`,
		);
		return json({ message: 'success on mock' }, 200);
	} catch (error) {
		const err = error instanceof Error ? error : new Error('unexpected error');
		console.log(`server error: ${err.message}`);
		return json({ message: err.message }, 500);
	}
};

const patchRoomActionMock: ActionFunction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<Message>> => {
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
		`/rooms/${roomId} ${request.method} ${JSON.stringify({
			roomId: roomId,
		})}`,
	);
	return json({ message: 'success on mock' }, 200);
};
