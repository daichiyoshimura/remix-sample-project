import { ActionFunctionArgs, TypedResponse, redirect } from '@remix-run/node';
import { RoomAttributes, postRoom } from '@api';
import { isString, writeRequestLog } from '@util';
import {
	InternalSeverErrorActionResponse,
	InvalidMethodErrorActionResponse,
	internalServerErrorAction,
	invalidMethodErrorAction,
	validationErrorAction,
} from '@actions';
import { getFormDataValue } from '@util/server';

export type RoomsPageActionResponses = PostRoomActionResponse | InvalidMethodErrorActionResponse;

export const roomsPageAction = async (
	args: ActionFunctionArgs,
): Promise<TypedResponse<RoomsPageActionResponses>> => {
	switch (args.request.method) {
		case 'POST':
			return await postRoomsAction(args);
		default:
			return await invalidMethodErrorAction();
	}
};

type PostRoomActionRequest = RoomAttributes;

export type PostRoomActionResponse = never | InternalSeverErrorActionResponse;

const postRoomsAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<PostRoomActionResponse>> => {
	try {
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const formData = await request.formData();
		const name = getFormDataValue(formData, 'name');
		if (!isString(name)) {
			return validationErrorAction('name is required');
		}
		const body: PostRoomActionRequest = {
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
		return redirect(`/rooms/${postRoomResponse.id}`);
	} catch (error) {
		return internalServerErrorAction(error);
	}
};
