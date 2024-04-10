import { ActionFunctionArgs, TypedResponse, json, redirect } from '@remix-run/node';
import { Room, RoomAttributes, postRoom } from '@api';
import {
	MappedTypes,
	Message,
	isActionError,
	isString,
	writeErrorLog,
	writeRequestLog,
} from '@util';
import { invalidMethodAction } from '@actions';

export const roomsAction = async (
	args: ActionFunctionArgs,
): Promise<TypedResponse<RoomsActionResponse | Message>> => {
	switch (args.request.method) {
		case 'POST':
			return await postRoomsAction(args);
		default:
			return await invalidMethodAction();
	}
};

type RoomActionRequest = RoomAttributes;

export type RoomsActionResponse = MappedTypes<{
	room: Room;
}>;

const postRoomsAction = async (
	{ request, params }: ActionFunctionArgs,
): Promise<TypedResponse<RoomsActionResponse | Message>> => {
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
		return redirect(`/rooms/${postRoomResponse.id}`);
	} catch (error) {
		const message = isActionError(error)
			? error.message
			: 'Please try again later, or contact support if the issue persists';
		const response = { message: message };
		writeErrorLog(response);
		return json(response, 500);
	}
};
