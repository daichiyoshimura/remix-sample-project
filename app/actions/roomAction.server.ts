import { ActionFunctionArgs, TypedResponse, redirect } from '@remix-run/node';
import { deleteRoom, patchRoom } from '@api';
import { Message, isNull, isString, writeRequestLog } from '@util';
import {
	InvalidMethodActionResponse,
	InternalSeverErrorActionResponse,
	internalServerErrorAction,
	invalidMethodAction,
	ValidationErrorActionActionResponse,
	validationErrorAction,
} from '@actions';
import { getFormDataValue } from '@util/server';

type Responses = DeleteRoomActionResponse | PatchRoomActionResponse;

export const roomAction = async (args: ActionFunctionArgs): Promise<TypedResponse<Responses>> => {
	switch (args.request.method) {
		case 'DELETE':
			return await deleteRoomAction(args);
		case 'PATCH':
			return await patchRoomAction(args);
		default:
			return await invalidMethodAction();
	}
};

type DeleteRoomActionResponse =
	| Message
	| InvalidMethodActionResponse
	| InternalSeverErrorActionResponse;

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
		return internalServerErrorAction(error);
	}
};

type PatchRoomActionResponse =
	| never
	| InvalidMethodActionResponse
	| ValidationErrorActionActionResponse
	| InternalSeverErrorActionResponse;

const patchRoomAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<PatchRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';
		const formData = await request.formData();
		const name = getFormDataValue(formData, 'name');
		if (isNull(name)) {
			return validationErrorAction('name is required');
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
		return new Response(null, {
			status: 204,
			statusText: 'No Content',
		});
	} catch (error) {
		return internalServerErrorAction(error);
	}
};
