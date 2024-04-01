import {
	LoaderFunction,
	LoaderFunctionArgs,
	TypedResponse,
	json,
} from '@remix-run/node';

export type Participant = {
	id: string;
	name: string;
	part: string;
};

export type RoomProfileResponse = {
	id: string;
	name: string;
	createdAt: string;
	participants: Participant[];
};

export const roomLoaderMock: LoaderFunction = async ({
	request,
	params,
}: LoaderFunctionArgs): Promise<TypedResponse<RoomProfileResponse>> => {
	const roomId = params.id as string;
	console.log('/rooms/' + roomId + ' ' + request.method);
	return json({
		id: roomId,
		name: `Room ${roomId}`,
		createdAt: '2024-03-24 00:53:00',
		participants: [
			{ id: '1', name: 'John', part: 'Tp' },
			{ id: '2', name: 'Emma', part: 'Sax' },
			{ id: '3', name: 'Kate', part: 'Pf' },
		],
	});
};
