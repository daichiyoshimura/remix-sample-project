import {
	LoaderFunction,
	LoaderFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';

type Room = {
	id: string;
	name: string;
	createdAt: string;
};

export type RoomsResponse = {
	rooms: Room[];
};

export const roomsLoaderMock: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs): Promise<TypedResponse<RoomsResponse>> => {
	console.log(`/rooms ${request.method}`);
	return json({
		rooms: [
			{
				id: '1',
				name: 'Room 1',
				createdAt: '2024-03-24 00:51:00',
			},
			{
				id: '2',
				name: 'Room 2',
				createdAt: '2024-03-24 00:51:00',
			},
			{
				id: '3',
				name: 'Room 3',
				createdAt: '2024-03-24 00:51:00',
			},
		],
	});
};
