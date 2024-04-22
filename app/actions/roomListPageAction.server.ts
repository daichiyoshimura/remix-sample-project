import { ActionFunctionArgs, TypedResponse, redirect } from '@remix-run/node';
import { isString, writeRequestLog } from '@util';
import {
	InternalSeverErrorActionResponse,
	InvalidMethodErrorActionResponse,
	internalServerErrorAction,
	invalidMethodErrorAction,
	validationErrorAction,
} from '@actions';
import { RoomAttributes, postRoom } from '@server/api';
import { getFormDataValue } from '@server/util';

export type RoomListPageActionResponses = PostRoomActionResponse | InvalidMethodErrorActionResponse;

export const roomListPageAction = async (
	args: ActionFunctionArgs,
): Promise<TypedResponse<RoomListPageActionResponses>> => {
	switch (args.request.method) {
		case 'POST':
			return await postRoomListAction(args);
		default:
			return await invalidMethodErrorAction();
	}
};

type PostRoomActionRequest = RoomAttributes;

export type PostRoomActionResponse = never | InternalSeverErrorActionResponse;

const postRoomListAction = async (
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
