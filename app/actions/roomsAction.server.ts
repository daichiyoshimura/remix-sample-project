import { ActionFunctionArgs, TypedResponse, redirect } from '@remix-run/node';
import { Room, RoomAttributes, postRoom } from '@api';
import { MappedTypes, Message, isNull, isString, writeRequestLog } from '@util';
import { internalServerErrorAction, invalidMethodAction, validationErrorAction } from '@actions';
import { getFormDataValue } from '@util/server';

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
		const name = getFormDataValue(formData, 'name');
		if (isNull(name)) {
			return validationErrorAction('name is required');
		}
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
		return internalServerErrorAction(error);
	}
};
