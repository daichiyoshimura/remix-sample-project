import { LoaderFunction, LoaderFunctionArgs, TypedResponse, json } from '@remix-run/node';
import { Participant, Room, getParticipantList, getRoom } from '@api';
import { MappedTypes, Message, isString, writeRequestLog, writeErrorLog } from '@util';
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
		const accountId: string = isString(params.accountId) ? params.accountId : '';
		const roomId: string = isString(params.id) ? params.id : '';

		const getRoomReqeuest = { id: roomId, accountId: accountId };
		const getRoomResponse = await getRoom(getRoomReqeuest);

		const getParticipantListRequest = { roomId: roomId };
		const getParticipantListResponse = await getParticipantList(getParticipantListRequest);

		const response = {
			roomProfile: {
				...getRoomResponse,
				...getParticipantListResponse,
			},
		};
		writeRequestLog({
			path: `/rooms/${roomId}`,
			method: request.method,
			request: undefined,
			response: response,
		});
		return json(response, 200);
	} catch (error) {
		const err = error instanceof Error ? error : new Error('unexpected error');
		writeErrorLog({ message: err.message });
		return json({ message: err.message }, 500);
	}
};
