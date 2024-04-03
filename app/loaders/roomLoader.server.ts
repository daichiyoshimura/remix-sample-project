import { LoaderFunction, LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { getParticipantList } from '@apis/participant.server';
import { getRoom } from '@apis/room.server';

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
	const room = await getRoom({ id: roomId, accountId: 'accountId' });
	const participantList = await getParticipantList({ roomId: roomId });
	console.log(`/rooms/${roomId} ${request.method}`);
	return json({
		id: room.id,
		name: room.name,
		createdAt: room.createdAt,
		participants: participantList.prticipants,
	});
};
