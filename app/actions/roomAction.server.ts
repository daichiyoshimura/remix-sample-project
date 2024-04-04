import { ActionFunction, ActionFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { RoomAttributes, deleteRoom, patchRoom } from '@api';
import { Message, logger , isString } from '@util';
import { invalidMethodAction } from '@actions';

export const roomAction: ActionFunction = async (args: ActionFunctionArgs) => {
	switch (args.request.method) {
		case 'DELETE':
			return await deleteRoomAction(args);
		case 'PATCH':
			return await patchRoomAction(args);
		default:
			return await invalidMethodAction(args);
	}
};

type DeleteRoomActionResponse = Message;

const deleteRoomAction: ActionFunction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<DeleteRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';
		const message = await deleteRoom({ id: roomId, accountId: accountId });
		logger({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: '',
			response: JSON.stringify(message),
		});
		return json({ message: 'success on mock' }, 200);
	} catch (error) {
		const err = error instanceof Error ? error : new Error('unexpected error');
		return json({ message: err.message }, 500);
	}
};

type PatchRoomActionRequest = RoomAttributes;
type PatchRoomActionResponse = Message;

const patchRoomAction: ActionFunction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<PatchRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';
		const body: PatchRoomActionRequest = await request.json();
		const room = await patchRoom({
			accountId: accountId,
			room: {
				id: roomId,
				...body,
			},
		});
		logger({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: JSON.stringify(body),
			response: JSON.stringify(room),
		});
		return json({ message: 'success on mock' }, 200);
	} catch (error) {
		const err = error instanceof Error ? error : new Error('unexpected error');
		console.log(`server error: ${err.message}`);
		return json({ message: err.message }, 500);
	}
};
