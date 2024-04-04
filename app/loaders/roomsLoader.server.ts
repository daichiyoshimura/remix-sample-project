import { LoaderFunction, LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { getRoomList } from '@apis/room.server';

type Room = {
	id: string;
	name: string;
	createdAt: string;
};

export type RoomsResponse = {
	rooms: Room[];
};

export const roomsLoader: LoaderFunction = async (
	{ request }: LoaderFunctionArgs,
): Promise<TypedResponse<RoomsResponse>> => {
	const roomList = await getRoomList({ accountId: 'accountId' });
	console.log(`/rooms ${request.method}`);
	return json({
		rooms: roomList.rooms,
	});
};
