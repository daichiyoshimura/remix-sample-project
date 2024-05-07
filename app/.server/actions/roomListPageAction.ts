import { ActionFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { isString, writeRequestLog } from '@util';
import { Room, RoomAttributes, postRoom } from '@server/api';
import {
	MethodNotAllowedError,
	ValidationError,
	getFormDataValue,
	handleServerError,
} from '@server/util';

export type RoomListPageActionResponses = PostRoomActionResponse;

export const roomListPageAction = async (
	args: ActionFunctionArgs,
): Promise<TypedResponse<RoomListPageActionResponses>> => {
	switch (args.request.method) {
		case 'POST':
			return await postRoomListAction(args);
		default:
			return handleServerError(new MethodNotAllowedError());
	}
};

type PostRoomActionRequest = RoomAttributes;

export type PostRoomActionResponse = Room;

const postRoomListAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<PostRoomActionResponse>> => {
	try {
		/*
		if (!isString(params.accountId)) {
			return handleServerError(new ValidationError('account-id is required'));
		}
		*/

		const formData = await request.formData();
		const name = getFormDataValue(formData, 'name');
		if (!isString(name)) {
			return handleServerError(new ValidationError('name is required'));
		}

		const body: PostRoomActionRequest = {
			name: name,
		};
		const postRoomRequest = { accountId: '', roomAttributes: body };
		const postRoomResponse = await postRoom(postRoomRequest);

		writeRequestLog({
			path: '/rooms',
			method: request.method,
			request: postRoomRequest,
			response: postRoomResponse,
		});
		return json(postRoomResponse, 200);
	} catch (error) {
		return handleServerError(error);
	}
};
