import {
	ActionFunction,
	ActionFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';
import { invalidMethodAction } from './invalidMethodAction.server';
import { Message } from './message.server';

export const roomsActionMock: ActionFunction = async (
	args: ActionFunctionArgs,
) => {
	switch (args.request.method) {
		case 'POST':
			return await postRoomsActionMock(args);
		default:
			return await invalidMethodAction(args);
	}
};

export type Room = {
	id: string;
	name: string;
};

export type RoomsActionResponse = {
	room: Room,
	message: Message,
}

const postRoomsActionMock: ActionFunction = async ({
	request,
}: ActionFunctionArgs): Promise<TypedResponse<Room>> => {
	const body = await request.text();
	console.log(`/rooms ${request.method} ${body}`);
	return json({ id: '1', name: 'room-1' }, 200);
};
