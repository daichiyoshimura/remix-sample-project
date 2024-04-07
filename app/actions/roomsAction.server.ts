import { ActionFunction, ActionFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Room, RoomAttributes, postRoom } from '@api';
import {
	MappedTypes,
	Message,
	isActionError,
	isLoaderError,
	isString,
	writeErrorLog,
	writeRequestLog,
} from '@util';
import { invalidMethodAction } from '@actions';

export const roomsAction: ActionFunction = async (args: ActionFunctionArgs) => {
	switch (args.request.method) {
		case 'POST':
			console.log(args.request.headers.get('Content-Type'));
			if (
				args.request.headers.get('Content-Type') ===
				'application/x-www-form-urlencoded;charset=UTF-8'
			) {
				return await postRoomsFormAction(args);
			}
			return await postRoomsAction(args);
		default:
			return await invalidMethodAction(args);
	}
};

type RoomActionRequest = RoomAttributes;

type RoomsActionResponse = MappedTypes<
	{
		room?: Room;
	} & Message
>;

const postRoomsAction: ActionFunction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<RoomsActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const body: RoomActionRequest = await request.json();
		const postRoomRequest = { accountId: accountId, roomAttributes: body };
		const postRoomResponse = await postRoom(postRoomRequest);
		writeRequestLog({
			path: '/rooms',
			method: request.method,
			request: postRoomRequest,
			response: postRoomResponse,
		});
		return json({ room: postRoomResponse }, 200);
	} catch (error) {
		const message = isLoaderError(error) ? error.message : 'unexpected error';
		const response = { message: message };
		writeErrorLog(response);
		return json(response, 500);
	}
};

const postRoomsFormAction: ActionFunction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<RoomsActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const formData = await request.formData();
		const _name = formData.get('name');
		const name = _name !== null ? _name : '';
		const body: RoomActionRequest = {
			name: name.toString(),
		};
		const postRoomRequest = { accountId: accountId, roomAttributes: body };
		const postRoomResponse = await postRoom(postRoomRequest);
		writeRequestLog({
			path: '/rooms',
			method: request.method,
			request: postRoomRequest,
			response: postRoomResponse,
		});
		return json({ room: postRoomResponse }, 200);
	} catch (error) {
		const message = isActionError(error) ? error.message : 'unexpected error';
		const response = { message: message };
		writeErrorLog(response);
		return json(response, 500);
	}
};
