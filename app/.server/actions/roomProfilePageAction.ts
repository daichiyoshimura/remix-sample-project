import { ActionFunctionArgs, TypedResponse, json, redirect } from '@remix-run/node';
import { MessageWithSuccess, isString, writeRequestLog } from '@util';
import { deleteRoom, patchRoom } from '@server/api';
import {
	MethodNotAllowedError,
	ValidationError,
	getFormDataValue,
	handleServerError,
} from '@server/util';

export type RoomProfilePageActionResponses = DeleteRoomActionResponse | PatchRoomActionResponse;

export const roomProfilePageAction = async (
	args: ActionFunctionArgs,
): Promise<TypedResponse<RoomProfilePageActionResponses>> => {
	switch (args.request.method) {
		case 'DELETE':
			return await deleteRoomAction(args);
		case 'PATCH':
			return await patchRoomAction(args);
		default:
			return handleServerError(new MethodNotAllowedError());
	}
};

type DeleteRoomActionResponse = never;

const deleteRoomAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<DeleteRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';

		const deleteRoomRequest = { id: roomId, accountId: accountId };
		const deleteRoomResponse = await deleteRoom(deleteRoomRequest);

		writeRequestLog({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: deleteRoomRequest,
			response: deleteRoomResponse,
		});
		return redirect(`/rooms`);
	} catch (error) {
		return handleServerError(error);
	}
};

type PatchRoomActionResponse = MessageWithSuccess;

const patchRoomAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<PatchRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';
		const formData = await request.formData();
		const name = getFormDataValue(formData, 'name');
		if (!isString(name)) {
			return handleServerError(new ValidationError('name is required'));
		}
		const patchRoomRequest = {
			accountId: accountId,
			room: {
				id: roomId,
				name: name,
			},
		};
		const patchRoomResponse = await patchRoom(patchRoomRequest);
		writeRequestLog({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: patchRoomRequest,
			response: patchRoomResponse,
		});
		return json({ success: true, message: 'ok' }, 200);
	} catch (error) {
		return handleServerError(error);
	}
};
