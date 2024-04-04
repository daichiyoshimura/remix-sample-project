import { LoaderFunction, LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Participant, Room, getParticipantList, getRoom } from '@api';
import { MappedTypes, Message, logger } from '@util';
import { MutationTimes } from '@util/server';

export type RoomLoaderRequest = Participant;

export type RoomLoaderResponse = MappedTypes<
	{
		roomProfile?: {
			participants: Participant[];
		} & Room &
			MutationTimes;
	} & Message
>;

export const roomLoader: LoaderFunction = async (
	{ request, params }: LoaderFunctionArgs,
): Promise<TypedResponse<RoomLoaderResponse>> => {
	try {
		const accountId: string = typeof params.accountId === 'string' ? params.accountId : '';
		const roomId: string = typeof params.id === 'string' ? params.id : '';
		const room = await getRoom({ id: roomId, accountId: accountId });
		const participantList = await getParticipantList({ roomId: roomId });
		const response = {
			roomProfile: {
				...room,
				...participantList,
			},
		};
		logger({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: await request.text(),
			response: JSON.stringify(response),
		});
		return json(response, 200);
	} catch (error) {
		const err = error instanceof Error ? error : new Error('unexpected error');
		console.log(`server error: ${err.message}`);
		return json({ message: err.message }, 500);
	}
};
