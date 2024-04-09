import { ActionFunctionArgs, TypedResponse, json, redirect } from '@remix-run/node';
import { RoomAttributes, deleteRoom, patchRoom } from '@api';
import {
	MappedTypes,
	Message,
	isLoaderError,
	isString,
	writeErrorLog,
	writeRequestLog,
} from '@util';
import { InvalidMethodActionResponse, invalidMethodAction } from '@actions';

export const roomAction = async (
	args: ActionFunctionArgs,
): Promise<
	TypedResponse<DeleteRoomActionResponse | PatchRoomActionResponse | InvalidMethodActionResponse>
> => {
	switch (args.request.method) {
		case 'DELETE':
			if (
				args.request.headers.get('Content-Type') ===
				'application/x-www-form-urlencoded;charset=UTF-8'
			) {
				return await deleteRoomFormAction(args);
			}
			return await deleteRoomAction(args);
		case 'PATCH':
			if (
				args.request.headers.get('Content-Type') ===
				'application/x-www-form-urlencoded;charset=UTF-8'
			) {
				return await patchRoomFormAction(args);
			}
			return await patchRoomAction(args);
		default:
			throw await invalidMethodAction();
	}
};

type DeleteRoomActionResponse = MappedTypes<Message>;

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
		return json({ message: 'success on mock' }, 200);
	} catch (error) {
		const message = isLoaderError(error) ? error.message : 'unexpected error';
		const response = { message: message };
		writeErrorLog(response);
		throw json(response, 500);
	}
};

const deleteRoomFormAction = async (
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
		const message = isLoaderError(error) ? error.message : 'unexpected error';
		const response = { message: message };
		writeErrorLog(response);
		throw json(response, 500);
	}
};

type PatchRoomActionRequest = RoomAttributes;
type PatchRoomActionResponse = MappedTypes<Message>;

const patchRoomAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<PatchRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';
		const body: PatchRoomActionRequest = await request.json();
		const patchRoomRequest = {
			accountId: accountId,
			room: {
				id: roomId,
				...body,
			},
		};
		const patchRoomResponse = await patchRoom(patchRoomRequest);
		writeRequestLog({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: patchRoomRequest,
			response: patchRoomResponse,
		});
		return json({ message: 'success on mock' }, 200);
	} catch (error) {
		const message = isLoaderError(error) ? error.message : 'unexpected error';
		const response = { message: message };
		writeErrorLog(response);
		return json(response, 500);
	}
};

const patchRoomFormAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<PatchRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';
		const formData = await request.formData();
		const _name = formData.get('name');
		const name = _name !== null ? (_name as string) : '';
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
		return json({ message: 'success on mock' }, 200);
	} catch (error) {
		const message = isLoaderError(error) ? error.message : 'unexpected error';
		const response = { message: message };
		writeErrorLog(response);
		return json(response, 500);
	}
};
